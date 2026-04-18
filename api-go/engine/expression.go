package engine

import (
	"fmt"
	"strings"

	"github.com/dop251/goja"
	"github.com/expr-lang/expr"
)

// EvaluateCondition evaluates a BPMN condition expression against process data.
// Supports generic JS-like expressions handled by expr-lang/expr.
// Examples: "data.amount > 1000", "status == 'approved'"
func EvaluateCondition(expression string, data map[string]interface{}) (bool, error) {
	if expression == "" {
		return true, nil // Empty condition is always true (default flow)
	}

	// Clean up ProcessMaker-style expressions
	exprStr := strings.TrimSpace(expression)
	exprStr = strings.TrimPrefix(exprStr, "${")
	exprStr = strings.TrimSuffix(exprStr, "}")
	exprStr = strings.TrimSpace(exprStr)

	if exprStr == "" {
		return true, nil
	}

	// Prepare environment
	env := map[string]interface{}{
		"data": data,
	}
	// Inject top-level keys for backward compatibility
	if data != nil {
		for k, v := range data {
			env[k] = v
		}
	}

	// Compile and run the expression
	program, err := expr.Compile(exprStr, expr.Env(env))
	if err != nil {
		return false, fmt.Errorf("PMQL compile failed: %v (expr: %s)", err, exprStr)
	}

	result, err := expr.Run(program, env)
	if err != nil {
		return false, fmt.Errorf("PMQL execution failed: %v", err)
	}

	// Interpret result as boolean
	if boolVal, ok := result.(bool); ok {
		return boolVal, nil
	}

	return false, fmt.Errorf("PMQL did not return a boolean")
}

// ExecuteScript runs a JavaScript script with access to process data.
// Returns the modified data object.
func ExecuteScript(script string, data map[string]interface{}) (map[string]interface{}, error) {
	if script == "" {
		return data, nil
	}

	vm := goja.New()

	// Make data available
	vm.Set("data", data)

	// Add console.log support (writes to a buffer we ignore)
	console := map[string]interface{}{
		"log": func(args ...interface{}) {
			// Silent in production; could be routed to a logger
		},
	}
	vm.Set("console", console)

	// Execute script
	_, err := vm.RunString(script)
	if err != nil {
		return data, fmt.Errorf("script execution failed: %v", err)
	}

	// Extract possibly-mutated data back
	dataVal := vm.Get("data")
	if dataVal != nil {
		exported := dataVal.Export()
		if result, ok := exported.(map[string]interface{}); ok {
			return result, nil
		}
	}

	return data, nil
}

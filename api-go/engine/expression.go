package engine

import (
	"fmt"
	"strings"

	"github.com/dop251/goja"
)

// EvaluateCondition evaluates a BPMN condition expression against process data.
// Supports JavaScript expressions commonly used in ProcessMaker:
//   - "data.amount > 1000"
//   - "data.status === 'approved'"
//   - "${data.total > 500}"
func EvaluateCondition(expression string, data map[string]interface{}) (bool, error) {
	if expression == "" {
		return true, nil // Empty condition is always true (default flow)
	}

	// Clean up ProcessMaker-style expressions
	expr := strings.TrimSpace(expression)
	expr = strings.TrimPrefix(expr, "${")
	expr = strings.TrimSuffix(expr, "}")
	expr = strings.TrimSpace(expr)

	if expr == "" {
		return true, nil
	}

	// Create a new JavaScript runtime
	vm := goja.New()

	// Inject the process data as a "data" object
	if data != nil {
		vm.Set("data", data)
	} else {
		vm.Set("data", map[string]interface{}{})
	}

	// Also inject top-level keys for backward compatibility
	if data != nil {
		for k, v := range data {
			vm.Set(k, v)
		}
	}

	// Execute the expression
	result, err := vm.RunString(expr)
	if err != nil {
		return false, fmt.Errorf("expression evaluation failed: %v (expr: %s)", err, expr)
	}

	// Interpret result as boolean
	return result.ToBoolean(), nil
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

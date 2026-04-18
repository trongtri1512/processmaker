package engine

import (
	"encoding/xml"
)

// Definitions represents the root node of a BPMN XML.
type Definitions struct {
	XMLName   xml.Name  `xml:"definitions"`
	Processes []Process `xml:"process"`
}

// Process represents a process namespace containing nodes and flows.
type Process struct {
	ID                  string             `xml:"id,attr"`
	IsExecutable        bool               `xml:"isExecutable,attr"`
	StartEvents         []StartEvent       `xml:"startEvent"`
	UserTasks           []UserTask         `xml:"userTask"`
	ServiceTasks        []ServiceTask      `xml:"serviceTask"`
	ScriptTasks         []ScriptTask       `xml:"scriptTask"`
	EndEvents           []EndEvent         `xml:"endEvent"`
	SequenceFlows       []SequenceFlow     `xml:"sequenceFlow"`
	ExclusiveGateways   []ExclusiveGateway `xml:"exclusiveGateway"`
	ParallelGateways    []ParallelGateway  `xml:"parallelGateway"`
}

type StartEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Outgoing []string `xml:"outgoing"`
}

type UserTask struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
	// Additional properties like assignment logic can be embedded here
}

type ServiceTask struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type ScriptTask struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Script   string   `xml:"script"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type EndEvent struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
}

type SequenceFlow struct {
	ID                  string `xml:"id,attr"`
	SourceRef           string `xml:"sourceRef,attr"`
	TargetRef           string `xml:"targetRef,attr"`
	ConditionExpression string `xml:"conditionExpression"`
}

type ExclusiveGateway struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

type ParallelGateway struct {
	ID       string   `xml:"id,attr"`
	Name     string   `xml:"name,attr"`
	Incoming []string `xml:"incoming"`
	Outgoing []string `xml:"outgoing"`
}

// ParseBPMN takes a raw XML byte array and unmarshals it into the Definitions struct.
func ParseBPMN(xmlData []byte) (*Definitions, error) {
	var definitions Definitions
	err := xml.Unmarshal(xmlData, &definitions)
	if err != nil {
		return nil, err
	}
	return &definitions, nil
}

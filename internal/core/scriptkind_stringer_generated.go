// Code generated by "stringer -type=ScriptKind -output=scriptkind_stringer_generated.go"; DO NOT EDIT.

package core

import "strconv"

func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[ScriptKindUnknown-0]
	_ = x[ScriptKindJS-1]
	_ = x[ScriptKindJSX-2]
	_ = x[ScriptKindTS-3]
	_ = x[ScriptKindTSX-4]
	_ = x[ScriptKindExternal-5]
	_ = x[ScriptKindJSON-6]
	_ = x[ScriptKindDeferred-7]
}

const _ScriptKind_name = "ScriptKindUnknownScriptKindJSScriptKindJSXScriptKindTSScriptKindTSXScriptKindExternalScriptKindJSONScriptKindDeferred"

var _ScriptKind_index = [...]uint8{0, 17, 29, 42, 54, 67, 85, 99, 117}

func (i ScriptKind) String() string {
	if i < 0 || i >= ScriptKind(len(_ScriptKind_index)-1) {
		return "ScriptKind(" + strconv.FormatInt(int64(i), 10) + ")"
	}
	return _ScriptKind_name[_ScriptKind_index[i]:_ScriptKind_index[i+1]]
}

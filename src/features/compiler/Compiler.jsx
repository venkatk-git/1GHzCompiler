// Dependencies
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { INITIAL_CODE } from "../../utils/constants";

// Constants & Helpers

// eslint-disable-next-line react/prop-types
function Compiler({ className }) {
  return (
    <div
      className={`h-[93vh] pt-1 text-[16px] border-r-2 border-gray-500 ${className}`}
    >
      <MonacoEditor
        width="100%"
        height="100%"
        language="java"
        value={INITIAL_CODE}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: "line",
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          overviewRulerLanes: 0,
          fontSize: 16,
        }}
        beforeMount={(monaco) => {
          monaco.editor.defineTheme("programizDarkTheme", {
            base: "vs-dark",
            inherit: true,
            rules: [
              { token: "keyword", foreground: "#cda869" },
              { token: "identifier", foreground: "#e2e2e4" },
              { token: "string", foreground: "#f1c40f" },
              { token: "number", foreground: "#e74c3c" },
              { token: "comment", foreground: "#5f5a60" },
            ],
            colors: {
              "editor.background": "#1c2130",
              "editor.foreground": "#abb2bf",
              "editor.selectionBackground": "#4f5666",
              "editor.selectionHighlightBackground": "#232836",
              "editor.lineHighlightBackground": "#232836",
              "editorCursor.foreground": "#abb2bf",
              "editorLineNumber.foreground": "#abb2bf",
            },
          });
        }}
        onMount={(editor, monaco) => {
          monaco.editor.setTheme("programizDarkTheme");
        }}
      />
    </div>
  );
}

export default Compiler;

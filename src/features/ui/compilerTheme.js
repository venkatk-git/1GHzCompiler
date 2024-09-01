const theme = {
  base: "vs",
  inherit: true,
  rules: [
    {
      token: "keyword",
      foreground: "#3498db", // Blue color for keywords
    },
    {
      token: "identifier",
      foreground: "#2ecc71", // Green color for identifiers
    },
    {
      token: "string",
      foreground: "#f1c40f", // Yellow color for strings
    },
    {
      token: "number",
      foreground: "#e74c3c", // Red color for numbers
    },
    {
      token: "comment",
      foreground: "#95a5a6", // Gray color for comments
    },
  ],
  colors: {
    "editor.background": "#f9f9f9", // White background
    "editor.foreground": "#333333", // Dark gray text color
    "editor.selectionBackground": "#d9d9d9", // Light gray selection background
    "editor.selectionHighlightBackground": "#f2f2f2", // Very light gray selection highlight background
    "editor.lineHighlightBackground": "#f2f2f2", // Very light gray line highlight background
    "editorCursor.foreground": "#333333", // Dark gray cursor color
    "editorLineNumber.foreground": "#95a5a6", // Gray line number color
  },
};

export default theme;

import React from "react";

// eslint-disable-next-line react/prop-types
function Output({ output, className }) {
  return <div className={`p-4 font-['ouput-font'] ${className}`}>{output}</div>;
}

export default Output;

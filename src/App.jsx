// Dependencies
import React from "react";
import { INITIAL_CODE } from "./utils/constants";

// Components
import Compiler from "./features/compiler/Compiler";
import Output from "./features/output/Output";
import Header from "./features/ui/components/Header/Header";
import Button from "./features/ui/components/Button/Button";

// Helpers & Constans
import { processCode } from "./utils/helpers";
import { COMPILER_ENDPOINT } from "./utils/constants";
import axios from "axios";

function App() {
  const [code, setCode] = React.useState(INITIAL_CODE);
  const [output, setOutput] = React.useState("Your output will come here\r\n");

  const handleSetOuput = (output) => {
    setOutput(output);
  };

  const handleRunCode = () => {
    const processedCode = processCode(code);

    const payload = { code: processedCode };
    let jsonCode = JSON.stringify(payload);

    console.log(jsonCode);

    axios
      .post(COMPILER_ENDPOINT, { code: processedCode })
      .then((res) => handleSetOuput(res.data.output))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex h-full overflow-y-hidden">
      <div className="flex-1">
        <Header>
          <span className="self-center font-semibold flex gap-2 text-white align-middle">
            Java Compiler
          </span>
          <Button variant="primary" onClick={handleRunCode}>
            Run
          </Button>
        </Header>
        <Compiler code={code} setCode={setCode} />
      </div>
      <div className="flex-1">
        <Header className="border-l-0">
          <span className="self-center font-semibold">Output</span>
          <Button variant="secondary">Clear</Button>
        </Header>
        <Output output={output} />
      </div>
    </div>
  );
}

export default App;

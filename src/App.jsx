// Dependencies

// Components
import Compiler from "./features/compiler/Compiler";
import Output from "./features/output/Output";
import Header from "./features/ui/components/Header/Header";
import Button from "./features/ui/components/Button/Button";

function App() {
  return (
    <div className="w-full flex ">
      <div className="flex-1">
        <Header>
          <span className="self-center font-semibold">Java Compiler</span>
          <Button variant="primary">Run</Button>
        </Header>
        <Compiler />
      </div>
      <div className="flex-1">
        <Header className="border-l-0">
          <span className="self-center font-semibold">Output</span>
          <Button variant="secondary">Clear</Button>
        </Header>
        <Output />
      </div>
    </div>
  );
}

export default App;

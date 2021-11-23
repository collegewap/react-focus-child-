import { useRef } from "react";
import ChildComp from "./ChildComp";

function App() {
  const childInputRef = useRef(null);

  const focusChild = () => {
    childInputRef.current && childInputRef.current.focus();
  };
  return (
    <div className="App">
      <button onClick={focusChild}>Focus child</button>
      <ChildComp childInputRef={childInputRef} />
    </div>
  );
}

export default App;

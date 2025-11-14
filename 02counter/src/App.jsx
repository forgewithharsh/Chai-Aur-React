import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      throw new Error("Counter cannot go above 20");
    }
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) {
      throw new Error("Counter cannot go below 0");
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;

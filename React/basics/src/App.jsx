import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <h1>this is react</h1>
      <p> value : {counter}</p>
      <div className="btn">
        <button className="inc"
          onClick={() => {
            setCounter(counter + 1)
            console.log(counter);
          }}
        >
          Increase
        </button>
        <button className="dec"
          onClick={() => {
            setCounter(counter - 1)
            console.log(counter);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;

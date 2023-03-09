import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  console.log("Component was re-rendered");

  const [count, setCount] = useState(0);

  function increaseCounterHandler() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function increaseCounterAsyncHandler() {
    setTimeout(() => {
      setCount((count) => count + 1);
      setCount((count) => count + 1);
    }, 500);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React 18 features</h1>
      <div className="card">
        <button onClick={increaseCounterHandler}>Increase synchronously</button>
        <br />
        <br />
        <button onClick={increaseCounterAsyncHandler}>
          Increase asynchronously
        </button>
        <p>count is {count}</p>
      </div>
    </div>
  );
}

export default App;

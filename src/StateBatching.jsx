import { useState } from "react";

function StateBatching() {
    console.log("StateBatching Component was re-rendered");

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
    <>
      <div className="card">
        <button onClick={increaseCounterHandler}>Increase synchronously</button>
        <br />
        <br />
        <button onClick={increaseCounterAsyncHandler}>
          Increase asynchronously
        </button>
        <p>count is {count}</p>
      </div>
    </>
  );
}

export default StateBatching;

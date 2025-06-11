import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <p> Counter value is {counter}</p>
      <button onClick={addValue}>Add </button>
      <button onClick={removeValue}>Remove {counter}</button>
      <p>sdsdsd {counter}</p>
    </>
  );
}
export default Counter;

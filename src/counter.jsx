import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(2);

  const addValue = () => {
    if (counter <= 19){
    setCounter(counter + 1);
  }
};

  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1);
    }

  }

  return (
    <>
      <p> Counter value is {counter}</p>
     
      <button onClick={removeValue}>Remove {counter}</button>
       <button onClick={addValue}>Add </button>
      <p>sdsdsd {counter}</p>
    </>
  );
}
export default Counter;

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
       <button onClick={addValue} className="bg-green-500 text-white px-4 py-2 rounded">Add </button>
      <p>sdsdsd {counter}</p>

      <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  );
}
export default Counter;

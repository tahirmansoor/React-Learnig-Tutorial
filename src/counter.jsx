function Counter(){


let counter = 215;    
const addValue = () =>{
    console.log("click" , counter) 
 counter = counter + 1;
}


    return(
        <>
           <p> Counter value is {counter}</p>
           <button onClick={addValue}>Add  </button>
           <button>Remove {counter}</button>
            <p>sdsdsd {counter}</p>
        </>

    )
}
export default Counter;

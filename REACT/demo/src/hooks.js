import React,{useState} from 'react';

const Hooks = () => {
    const [counter,setCounter] = useState(0)
    const increment =()=>{
        setCounter(counter+1)
    };
    const decrement =()=>{
        setCounter(counter-1)
    }
    return (
        <div>Hook
            <h2>Counter</h2>
            <p>{counter}</p>     
            <button onClick={increment}>+</button>       
            <button onClick={decrement}>-</button>    
        </div>
    );
}

export default Hooks;

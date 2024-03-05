import React, {useState} from 'react';

function Counter(){
    const [count , setCount] = useState(0);

    const increase = () =>{
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div class="counter">
            <h2 class="count-text">{count}</h2>
            <button class="button-increase" onClick={increase}>Increase</button>
            <button class="button-decrease" onClick={decrease}>Decrease</button>
            <button class="button-reset" onClick={reset}>Reset</button>
        </div>
    )
}   

export default Counter;
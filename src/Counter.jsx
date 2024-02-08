
import { useState } from "react";


export function Counter({ startValue = 0}) {
    const [counter, setCounter] = useState(startValue);
    function handleCounterClick() {
        setCounter((count) => count + 1) 
       
    }

    return (
        <div>
            <h2>How many time you&apos;ve clicked the button? {counter}</h2>
            <button onClick={handleCounterClick}>Click me!</button>
        </div>
    );
}
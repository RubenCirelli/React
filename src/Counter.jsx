import { useEffect, useState } from "react"

export function Counter({initialValue =0}){
    const [counter, setCounter] = useState(initialValue)
    
    
    function handleCounterIncrement(){
        setCounter((c) => c+1)
        }
        useEffect(() => {
        console.log(`counter increased by ${counter}`  );
        }, [{counter}])
        
    
    
    return (
        <div>
            <h2>I have counted to {counter} </h2>
            <button onClick={handleCounterIncrement}>Increment</button>

        </div>
    )
    
}

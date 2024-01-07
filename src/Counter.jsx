import { CounterDisplay } from "./CounterDisplay"
import { useState } from "react"

export function Counter({initialValue, variable}){
    
    const [counter, setCounter ] = useState(initialValue)

    function HandleCounterDecrement() {
        setCounter(counter - variable)
    }

    function HandleCounterReset() {
        setCounter(initialValue)
    }

    return (
        <div>
     <CounterDisplay  initialValue={counter} setValue={setCounter} variable={variable}/>
     <button onClick = {HandleCounterDecrement}>Decrement</button>
     <button onClick = {HandleCounterReset}>Reset</button>
        </div>
    )
}
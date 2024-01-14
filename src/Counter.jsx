import { useState } from "react"

export function Counter(){
    const [counter, setCounter] = useState(0)
    //usestate fa parte di un componente di react di conseguenza il
    //funzionamento di counter è svolto in modo diverso, per questo ci serve
    //setCounter come funzione, oltre ad essere dichiarata come const,
    //ci serve perchè l'incremento di counter non sarebbe stato immediato con
    //il classico counter +=1
    
    
    function handleCounterIncrement(){
        setCounter(counter +1 )
    }
    
    return (
        <div>
            <h2>I have counted to {counter} </h2>
            <button onClick={handleCounterIncrement}>Increment</button>

        </div>
    )
    
}

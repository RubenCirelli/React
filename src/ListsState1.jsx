import { useState } from "react"

export function ToDoList(){

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function handlePush(event){
        setTodos([...todos, input])
        setInput("")
    }

    function handleInputChange(event){
        setInput(event.target.value)
    }


    return(
        <div>
            <ul>
                <li>
                    <h1>{todos}</h1>
                </li>
            </ul>
            <button onClick={handlePush}>Click me</button>
            <input onChange={handleInputChange} />
        </div>
    )
}
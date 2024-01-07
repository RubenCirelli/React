import { useState } from "react"


export function ToDo() {

    const [todos, setTodos] = useState([])

    function handlePush(event) {
        event.preventDefault()
        const toDo = event.target.elements.todo.value
        setTodos((item)=>[...item, toDo])
        event.target.elements.todo.value=""
    }

    function handleReset(event) {
        setTodos([])
    }

    function handleRemove(event){
        setTodos("")
    }

    return (
        <form onSubmit={handlePush}>
        <div>
            <ul>
                <li>
                    <h1>{todos}</h1>
                </li>
            </ul>
            <button name = "OnClick" type = "submit" >Click me</button>
            <button name = "Reset" onClick={handleReset}>Reset</button>
            <input name="todo" onChange={()=>{}} />
            <ul>{todos.map((element)=><li>{element}
            <button name = "Remove" onClick={handleRemove}>Remove</button></li>)}</ul>
        </div>
        </form>
    )

}
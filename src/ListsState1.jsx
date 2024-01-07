import { useState } from "react"



export function ToDoList({ todos }) {
    return (
        <div>
            {todos.map((item) => (
                <ToDo key={item} item={item} />
            ))}
        </div>
    )
}
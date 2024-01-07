import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){

    const [username, setUsername] = useState("")

    function handleUsernameInputChange(event){
        const value = event.target.value
        setUsername(value)
    }

    return(
        <div>
            <Welcome name={username} eta={22} />
            <input value={username} onChange = {handleUsernameInputChange}/>
        </div>
    )
}
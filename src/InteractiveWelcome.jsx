import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){

    const [username, setUsername] = useState("")

    function handleUsernameInputChange(event){
        const value = event.target.value
        setUsername(value)
    }

    console.log(username)

    return(
        <div>
            <Welcome name={username} eta={22} />
            <input value={username} onChange = {handleUsernameInputChange}/>
        </div>
    )
}
// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.
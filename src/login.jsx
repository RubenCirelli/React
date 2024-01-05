import { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        setData(d => {
            return {
                ...data,
                [name]: value,
            }
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onInput={handleInputChange} />
            <input name="password" type="password" value={data.password} onInput={handleInputChange} />
            <label for="id">Ricordami</label>
            <input type="checkbox" id="checkbox" />
        </div>
    )}
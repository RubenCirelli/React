import { useState } from "react";

export function Login({ onLogin }) {
    const [data, setData] = useState({
        username: "",
        password: "",
        session: false,
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function onLogin(event) {
        console.log(data)
    }

    function handleReset() {
        setData({
            username: '',
            password: '',
            session: false
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onInput={handleInputChange} />
            <input name="password" type="password" value={data.password} onInput={handleInputChange} />
            <button name="login" disabled={!data.username || !data.password} onClick={onLogin}>Login</button>
            <button name="reset" onClick={handleReset}>Reset</button>
            <label>Ricordami</label>
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
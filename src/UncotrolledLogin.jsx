export function UncontrolledLogin() {

    function handleForm(event) {

        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false,
        }
        console.log(data)
    }

    

    return (
        <form onSubmit={handleForm}>
            <h1>Uncontrolled Login</h1>
            <input name="username" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
//Il codice è più rapido e semplice ma si potrebbe buggare più facilmente in errori se
// ci sono valori più "particolari" (vedi session in cui deve usarsi un operatore ternario)
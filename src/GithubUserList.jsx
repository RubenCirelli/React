import { useState, useEffect } from "react"
import { Link, Outlet,Routes,Route } from "react-router-dom"


const GettingData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.github.com/users`)
            const json = await response.json()
            console.log(json)
            setData(json)
        }
        getData()
    }, [])
    return (
        <div>
        <ul>
            {data.map((el, index) => (
                <li key={index}>
                    <Link to={el.login}>{el.login}</Link>
                </li>
            ))}
            
                <Link to=""><h2>Add an User and Select it</h2> </Link>
            
        </ul>
        <Outlet />
    </div>
    )
}
export default GettingData;
import { useEffect, useState } from "react"

import { Link, Outlet } from "react-router-dom";

export const GithubUserList = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const resp = await fetch('https://api.github.com/users');
            const json = await resp.json();
            console.log(json);
            setUser(json)
        }
        fetchApi();
    }, []);

    return (
        <div>
            <ul>
                {user.map((val, key) => (
                    <li key={key}>
                        <Link to={`/users/${val.login}`}>{val.login}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Outlet />
        </div>
    );

}
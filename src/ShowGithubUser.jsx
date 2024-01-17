import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
    const { username } = useParams()
    const [userDetail, setUserDetail] = useState({})

    async function getData() {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const responseJson = await response.json()
        console.log(responseJson)
        setUserDetail(responseJson)
    }

    useEffect(() => {
        getData()
    }, [username])

    return (
        <div>
            <h2>ID: {userDetail.id}</h2>
            <h2>Username: {userDetail.login}</h2>
        </div>
    )
}
export default ShowGithubUser

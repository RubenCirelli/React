// import { useEffect, useState } from "react"
// import useSWR from 'swr'

// function useGithubUser(username){
//     const [data, setData] = useState(null)

//     async function getData(username) {
//         const response = await fetch(`https://api.github.com/users/${username}`)
//         const json = await response.json()
//         console.log(json)
//         setData(json)
//     }

//     useEffect(() => {
//         getData(username)
//     }, [username])

//     return {data}
// }


import { useGithubUser } from "./useGithubUsers";


export const GithubUser = ({ username }) => {
    const {userData, error, isLoading } = useGithubUser(username)

    return (
        <div>
            {error && <h2>you have an error </h2>}
            {isLoading && <h2>Loading...</h2>}
            {userData && <div><h1>User&apos;s name: {userData.name}</h1>
              <h2>Login: {userData.login}</h2>
              <img src={userData.avatar_url} alt="avatar" />
            </div>}
            
            
        </div>
    );
}

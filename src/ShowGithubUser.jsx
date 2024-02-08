import { useParams } from "react-router-dom"
import { GithubUser } from "./GitHubUser"


export const ShowGithubUser = () => {
   const {username} =useParams();
    return <>
    
    <GithubUser username={username}/>
    </>
}
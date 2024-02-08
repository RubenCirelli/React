import { Link, Route, Routes } from "react-router-dom";
import  { SWRConfig } from 'swr'
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";
import { Welcome } from "./Welcome";


export function App() {
    return (
        <>
            <Link to="/">Welcome </Link>|
            <Link to="/counter"> Counter </Link> | 
            <Link to="/users"> ShowGitHubUser </Link>
            <SWRConfig value={{
                  fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
                  }}
                  >
            <Routes>  
              
                <Route path="/" element={<Welcome name={"Ruben"} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />} >
                    <Route index element={<p>Add a user and select it</p> } />
                    <Route path=":username" element={<ShowGithubUser />}/>
                </Route>
                
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
            </SWRConfig>
        </>
    );
}
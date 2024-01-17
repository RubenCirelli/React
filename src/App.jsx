import {  Routes, Route } from 'react-router-dom';
import  GettingData  from "./GithubUserList";
import  ShowGithubUser  from "./ShowGithubUser";

  
const App =() => {
    return (
        
            <Routes>
                <Route path="users" element={<GettingData />}>
                    <Route path=":username" element={ <ShowGithubUser />}></Route>
                </Route>
            </Routes>
            )
    } 
export default App
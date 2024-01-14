import {  Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import  FetchData  from "./GitHubUser";
import { Hello } from './Welcome';
import { Counter } from "./Counter"

  
const App =() => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="users/:username" element= {<FetchData username="RubenCirelli" />}></Route>
                <Route path="/Counter" element= {<Counter />}></Route>
                <Route path="/" element= {<Hello name="Ruben" />}></Route>
                <Route path="*"  element=
                {<div>  <p>Not found</p>
                    <Link to="/"> Go Homepage</Link>
                </div>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App
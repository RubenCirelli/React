import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  FetchData  from "./GitHubUser";
import { Hello } from './Welcome';
import { Counter } from "./Counter"

  
const App =() => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="users/:username" element= {<FetchData username="RubenCirelli" />}></Route>
                <Route path="/Counter" element= {<Counter />}></Route>
                <Route path="/" element= {<Hello name="Ruben" />}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default App
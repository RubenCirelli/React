import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  FetchData  from "./GitHubUser";

  
const App =() => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="users/:username" element= {<FetchData username="RubenCirelli" />}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default App
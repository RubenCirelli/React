import { Counter } from "./Counter";
import { Hello } from "./Welcome"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App =() => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Hello name="Ruben" />}></Route>
                <Route path="/Counter" element={<Counter />}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default App
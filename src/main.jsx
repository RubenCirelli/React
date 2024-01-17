import {createRoot} from 'react-dom/client'
import  App  from './App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>    )
//i componente ripetuto come abbiam fatto verrà renderizzato molteplici volte in base
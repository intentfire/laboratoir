import LoginForm from "./components/loginform/LoginForm"
import Home from "./components/Home/Home"
import {BrowserRouter, Routes, Route, Link, Router, createHashRouter} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'





function App() {
    return(
        <div>
           <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
            </Routes>
           </BrowserRouter>
        </div>
    )
  
}

export default App

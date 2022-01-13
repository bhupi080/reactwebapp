import react from "react";
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import App from "./App";
import Enquir from "./Enquir";
import Login from "./Login";


function Nav(){


return(
<BrowserRouter>

        <header>
    <div className="wrapper">

        <img src="Logo.png" className="logo" />
        <nav className="navbar">
            
            <a href="http://localhost:3000/">Home </a>
            <a href="#">Products </a>
            <a href="#">Contactus </a>
            <a href="#">Aboutus </a>
            
        </nav>

        <Link to='/enq'>
        <button className="btn2"> ENQUIRY</button>
        </Link>
        <Link to='/tra'>
        <button className="btn">TRACK</button>
        </Link>
    </div>
</header>


    
            <Routes>

                <Route exact path='/' element={<Login/>} />
                <Route exact path='/tra' element={<Enquir/>} />
                <Route exact path='/enq' element={<App/>} />
              
            </Routes> 
         
    </BrowserRouter>
)}
export default Nav;
import react,{useState} from "react";
import './Style.css';
import axios from "axios";
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import App from "./App";

function Login() {





return (
     <>
    <div className="log">
    <div className="formrightl"> </div>
        
    
        <div className="formleftl">
             <h1><center>Login Now</center></h1>
        
                  <form>
                    
                     <div>
                         <h1>Username</h1>
                             <input type="name"placeholder="username"className="tex1" required/>
                    </div> 
                    <div>
                         <h1>Password</h1>
                             <input type="Password"placeholder="password"className="tex2" required />
                    </div>  <br/>
                    <div>
                        <h3>Please complete the Captcha Below</h3>
                            <input type=""className="tex3" value="15 + 9" disabled />
                            <input type=""placeholder="?"className="tex4" required/>
                   </div>  
                   <Link to='/enq'>
                    <button type="submit" class="butn3">Login</button>
                    </Link>
                  </form>
            </div>
        
            </div>

            
    
    </>

)

}
export default Login;

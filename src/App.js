import react,{useState} from "react";
import './Style.css';
import axios from "axios";
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import Enquir from "./Enquir";

function App() {

    const [orderid,setOrderid] = useState("");
    const [pc,setPc] = useState("");
    const [qty,setQty] = useState("");
    const [mpn,setMpn] = useState("");
    const [courier,setCourier] = useState("");
    const [rem,setRem] = useState("");



    const clicke = (e)=>{
        
        axios.post('http://localhost:4000/sb',{
          orderid :orderid,
          pc : pc,
          qty : qty,
          mpn : mpn,
          courier : courier,
          rem : rem

        })
        console.log("cliekd")
        alert("Successfully Submitted");
    }



  return (
    <>

<div className="log">

        
    
        <div className="formleft"> 
             <h1>Enquiry Form</h1><br/>
        
                  <form onSubmit={(e)=>clicke(e)}>
                    
                     <div>
                         <span className="label">Enter Order ID</span>
                             <input type="name"placeholder="Order ID"value={orderid} onChange={(e) => setOrderid(e.target.value)} className="text1"/>
                    </div> <br />
                    <div>
                    <span className="label">Enter Product Code</span>
                             <input type="name"placeholder="Product Code"value={pc} onChange={(e) => setPc(e.target.value)} className="text1"/>
                    </div> <br />
                    <div>
                   <span className="label">Enter Quantity</span>
                             <input type="name"placeholder="Quantity"value={qty} onChange={(e) => setQty(e.target.value)} className="text1"/>
                    </div><br />
                    <div>
                   <span className="label">Enter Market place name</span>
                             <input type="name"placeholder="Market place name"value={mpn} onChange={(e) => setMpn(e.target.value)} className="text1"/>
                    </div><br />
                    <div>
                    <span className="label">Enter Courier name</span>
                             <input type="name"placeholder="Courier name"value={courier} onChange={(e) => setCourier(e.target.value)} className="text1"/>
                    </div><br />
                    <div>
                    <span className="label">Enter Remarks (optional)</span>
                             <input type="name"placeholder="Remarks (optional)"value={rem} onChange={(e) => setRem(e.target.value)} className="text1"/>
                    </div> <br />
                    <div className="sub">
                        <h3>Please complete the Captcha Below</h3>
                            <input type=""className="text3" value="15 + 9" disabled/>
                            <input type=""placeholder="?"className="text4" />
                            
                   </div>  
                   <button type="submit" className="btn3">Submit</button>
                    

                  </form>
            
        </div>
      
    </div>
             
    </>
  )
}

export default App;

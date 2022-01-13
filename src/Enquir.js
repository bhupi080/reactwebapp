import react,{useState} from "react";
import './Style.css';
import axios from "axios";
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import App from "./App";

function Enquir() {

  const [track,setTrack] = useState("");
  const [awb,setAwb] = useState("");
  const [courier,setCourier] = useState("");
  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  const [status,setStatus] = useState("");
  const [expected,setExpected] = useState("");
  const [erro,setErro] = useState("");

  

  //  const gett =(e) => {
  //    e.preventDefault();
  //    axios.post('http://localhost:4000/track',{
  //         track: track

  //       })
  //       console.log("cliekd")
  //       alert("Successfully Submitted");
  //  }
  
  
  
  
  
  
  const search =(e)=> {
     e.preventDefault();
    axios.get('http://localhost:4000/access')
    .then(res => {
      var i=0;
      for(i=0;i<res.data.length;i++) {
      if(res.data[i].AWB_No==track)
      {
        setAwb('AWB No - '+res.data[i].AWB_No);
        setCourier('Courier Name - '+res.data[i].Courier_Name);
        setSource('Source - '+res.data[i].Source);
        setDestination('Destination - '+res.data[i].Destination);
        setStatus('Status - '+res.data[i].Status);
        setExpected('Expected Delivery - '+res.data[i].Expected_Delivery);
        setErro(" ");

        console.log(res.data[i].Expected_Delivery)

        break;




      }
      else 
      {
        setErro('Please Enter Valid AWB / Shipment No');
        setAwb(" ");
        setCourier(" ");
        setSource(" ");
        setDestination(" ");
        setStatus(" ");
        setExpected(" ");

      }
      
      
      
      }

      console.log(res)
    
      
      console.log(track)
     
      console.log(res.data.length)
    }).catch(err => {
      console.log(err)
    })

  }
  







  return (
    <>

<div className="log">

        
    
        <div className="formleft"> 
             <h1>Track your Order</h1><br/>

                  <form onSubmit={(e)=>search(e)} >
                    
                    
                         <span className="head">Enter AWB / Shipment No </span>
                             <input type="name"placeholder="AWB / Shipment No"value={track} onChange={(e) => setTrack(e.target.value)} className="tfield" />
                             <button type="submit" className="tbutton" >Track</button>
                   

                  </form>
                  
                  <div className="res">

                <div className="heade">
                <font color="red">{erro}</font>
                {awb}  <br/><br/>
                {courier} <br/><br/>
                {source} <br/><br/>
                {destination} <br/><br/>
                {status} <br/><br/>
                {expected} <br/>
                

                </div>
                  </div>
            
        </div>

       

      
    </div>



    </>
  )
}
export default Enquir;

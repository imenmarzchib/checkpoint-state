import React, { useEffect, useState } from "react";
import './App.css';

    
     
function App() {
    const[person,setPerson]=useState({
       
            fullname: "Marzougui Imen",
            bio: "Queen",
            profission: "student in Gomycode",
            imgs: "image.jpg",
              
    });
    const[show,setShow]=useState(false);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
  return ()=> clearInterval(interval);
}, []);
return (
    <div className="App">
        <button style={{ width:"10%",height:"300%",color:"black",fontSize:"30px" ,marginTop:"100px"}} onClick={()=>setShow(!show)} >show</button>
        {show ? (
            <div className="modal-bg" style={{ width:"40%", height:"50%"}}>
                <div style={{width:"50%"}}>
                <img src={person.imgs} style={{ borderRadius:"20%",marginTop:"30px"}}/>
                </div>
                <div style={{width:"50%"}}>
              <h1>{person.fullname}</h1>
              <h1>{person.bio}</h1>
              <h1>{person.profission}</h1>
              </div>   
              </div>   
        ): null
    }
    <h1>{seconds} seconds .</h1>
       </div>
     );
   }
   
   export default App;



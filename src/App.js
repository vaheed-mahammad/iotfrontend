import menu_png from './menu.png';
import fire from './fire.png';
import location from './location.png';
import EDIT from './edit.png';
import setting from './settings.png';
import remov from './remov.jpg';
import logout from './logout.jpg';
import photo from './photo.jpeg';
import add from './add.png';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {
  const [data1,setdata1]=useState([])
  useEffect(()=>{
    axios.get("https://iot-basednpm install gh-pages — save-dev-waste-monitering-system-e-3.onrender.com/showdb").then((response)=>{
    setdata1(response.data)
  }).catch((error)=>{
    console.log(error);
  })
  },[])
  
  console.log(data1)
  return (
    <>
  {/* nav bar*/}
  <nav className="flex_nav">
    <div className="left">
    <img  className="menumawa" src={menu_png} alt="mg" />
    </div>
    <div className="right">
      <h1>IOT based waste monitoring system</h1>
    </div>
    <div />
  </nav>
  {/* menu and profile*/}
  <div className="options">
    <div className="menu">
      <div className="up">
        <img src={photo} alt="" />
        <div className="menu">
          <b>vaheed</b>
            {" "}
            <img src={EDIT} alt="edit" />{" "}
        </div>
      </div>
    </div>
    <hr className="line" />
    <div className="down">
      <div className="flex_down">
        <img src={add} alt="edit" />
          <b className="pedit">add dustbin</b>
      </div>
      <div className="flex_down">
        <img src={remov} alt="edit" />
          <b className="pedit">remove dustbin</b>
      </div>
      <div className="flex_down">
        <img src={setting} alt="edit" />
          <b className="pedit">settings</b>
      </div>
      <div className="flex_down">
        <img src={logout} alt="edit" />
          <b className="pedit">log out</b>
      </div>
    </div>
  </div>
           {/*main page*/}
    <div>
      <h2 className="center">Dustbin ID:A</h2>
    </div>
    <div className="mp , ds">
    
      <div className="fill">
     <h3 className="fill-bot1" >Dustbin fill Status</h3>
     <div className="fill-bot2">
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<="03" &&
          <h1 className='p0'>empty</h1>
        
        )
        
      })
     } 
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<="25"  &&  data1[e].status>"03" &&
        <div className='p1'>{data1[e].status}%</div>
        
       
         )
        
      })
     } 
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<="45"  && data1[e].status>"25"  &&
        <div className='p2'>{data1[e].status}%</div>
        
        )
        
      })
     }
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<="65"  &&  data1[e].status>"45"  &&
          
        <div className='p3'>{data1[e].status}%</div>
       
        )
        
      })
     }
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<="85"  && data1[e].status>"65"  &&
         
        <div className='p4'>{data1[e].status}%</div>
       
        )
        
      })
     }
      {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" && data1[e].status<"95"  && data1[e].status>"85"  &&
          
        <div className='p5'>{data1[e].status}%</div>
      
        )
        
      })
     }
      {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" &&  data1[e].status>="95"  && data1[e].status<="98"  &&

        <div className='p6'>{data1[e].status}%</div>
  
        )
        
      })
      
     }  
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a2" &&  data1[e].status==="99"  &&

        <div className='p6'>100%</div>
  
        )
        
      })
      
     }  
</div></div>
        {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a1" && data1[e].status==="1" &&
          <div className="fire">
          <img src={fire} alt="fire" />
        </div>
        )
        
      })
     }
     {
      data1.map((datax,e)=>{
        return(
          data1[e].slot_id==="a1" && data1[e].status==="0" &&
          <div className="NOfire">
            <h3>no fire</h3>
        </div>
        )
        
      })
     }
    {/*condition close*/}
    <div className="location">
      <a href="https://www.google.com/maps/place/CBIT+ECE+BLOCK/@17.3923322,78.3177296,18.37z/data=!4m6!3m5!1s0x3bcb9562220c5003:0x608c8d69a9c55a5c!8m2!3d17.3909843!4d78.318591!16s%2Fg%2F11j121fr5x?authuser=0">
        <img src={location}  alt="" />
      </a>
    </div>
  </div>    
</>
  );
}
export default App;

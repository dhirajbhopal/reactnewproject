import { useState } from "react";
import './style.css'
const UseState=()=>
{
  const [name, setName]= useState("Dhiraj");
  const MychangeName=()=>
   {
    setName("Dhiraj Patel ");
   }

	return(
	     <>
       <body style={{backgroundColor:"#b6d9c9"}}>
        <h1> Hello {name} Welcome to Bhopal</h1>
        <button onClick={MychangeName}>  Click here to Chnage Name </button>
        <br /><br /><br /><br /><br /><br /><br /> 
        </body>
          </>
		); 
	}
   
export default UseState;
import { useState } from "react";
import './style.css'
const Usestatehook=()=>
{
  const [name, setVal]= useState("");

	return(
	     <> <br />
       Selcte City <input type="text" value={name} /><br /> <br />
       <button onClick={()=>{setVal("Bhopal")}}>Bhopal</button> &#160;
       <button onClick={()=>{setVal("Indore")}}>Indore</button> &#160;
       <button onClick={()=>{setVal("Jabbalpur")}}>Jabbalpur</button> &#160;
       <button onClick={()=>{setVal("Gawaliar")}}>Gawaliar</button> 
       <br /><br /> 

           </>
		); 
	}
   
export default Usestatehook;
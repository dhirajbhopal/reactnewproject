import { useState , useEffect } from "react";
import './style.css'
const UseEffectfirst=()=>
{
  const [cnt, setCnt]= useState(0);
  useEffect(()=>{setTimeout(()=>{setCnt(cnt+1)},1000);
  });

	return(
	     <>
      <h1> My Data Count is: {cnt} </h1>

           </>
		); 
	}
   
export default UseEffectfirst;
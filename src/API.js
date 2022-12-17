import	{useState ,useEffect} from "react";
import axios from "axios"
import './style.css'
const API=()=>
{
	const [mydata , setMydata]=useState([]);
	const loadData=()=>
	{
		axios.get("http://localhost:4000/students").then((res)=> {setMydata(res.data)});
	}
	useEffect(()=>{
		loadData();
	   },[]);

	    return(
	    	<>
	     <h1> Welcome To MY API Page </h1>
          <table className="table border-1 w-50 m-2" style={{border: "2px solid red", textAlign:"center"}}>
          <tr className="table border-1 bg-danger">
          <td> Name </td>
          <td> Roll No </td>
          <td> Address </td>
          </tr>
	     {mydata.map((key)=>
	     <> 
	     <tr style={{border: "2px solid red" ,textAlign:"center"}}>
	     <td>{key.name} </td> 
	     <td> {key.rollno} </td> 
	     <td>{key.Add} </td>
	     </tr>
          </>
	     )}
	     </table>
	    
          </>
		); 
	}
   
export default API;
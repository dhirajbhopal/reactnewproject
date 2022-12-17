import	{useState ,useEffect} from "react";
import axios from "axios"
import './style.css'
const Delete=()=>
{
	const [mydata , setMydata]=useState([]);
	const [mystate, setMystate]=useState("");

	const loadData=()=>
	{
		axios.get("http://localhost:4000/students").then((res)=>{setMydata(res.data)});
	}

useEffect(()=>{
		loadData();
	   }, [mystate]);

const deleteRec=(id)=>
   { axios.delete(`http://localhost:4000/students/${id}`).then((res)=> {alert("Deleted"); setMystate(mystate+1);});}


	    return(
	    	<>
	     <h1> Welcome To MY Delete API Page </h1>
          <table className="table border-1 w-50 m-2" style={{border: "2px solid red", textAlign:"center"}}>
          <tr className="table border-1 bg-danger">
          <td> Name </td>
          <td> Roll No </td>
          <td> Address </td>
          <td> Action </td>
          </tr>
	     {mydata.map((key)=>
	     <> 
	     <tr style={{border: "2px solid red" ,textAlign:"center"}}>
	     <td>{key.name} </td> 
	     <td> {key.rollno} </td> 
	     <td>{key.Add} </td>
	     <td><button class="btn btn-outline-danger p-0 m-0" onClick={()=>deleteRec(key.id)}> Delete </button> </td>
	     </tr>
          </>
	     )}
	     </table>
	    
          </>
		); 
	}
   
export default Delete;
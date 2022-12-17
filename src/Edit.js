import	{useState ,useEffect} from "react";
import	{Link} from "react-router-dom";
import axios from "axios"
import './style.css'
const Edit=()=>
{
	const [mydata , setMydata]=useState([]);
	const loadData=()=>
	{
		axios.get("http://localhost:4000/students").then((res)=> {setMydata(res.data)});
	}
	useEffect(()=>{
		loadData();
	}, []);

	    return(
	    	<>
	     <h1> Edit Student records </h1>
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
	     <td> <Link to={`/editrec/${key.id}`}> Edit Record </Link> </td>
	     </tr>
          </>
	     )}
	     </table>
          </>
		); 
	}
   
export default Edit;
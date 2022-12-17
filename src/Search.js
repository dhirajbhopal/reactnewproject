import	{useState ,useEffect} from "react";
import  {Link} from "react-router-dom";
import axios from "axios"
import './style.css'
const Search=()=>
{
	const [mydata , setMydata]=useState([]);
	const [input , setInput]=useState({});
  const [mystate, setMystate]=useState("");


const handleInput=(e)=>
{
	let name=e.target.name;
	let value=e.target.value;
	setInput(values=>({...values,[name]:value}) );
}

const showRecord=()=>
   { axios.
   get(`http://localhost:4000/students/?name=${input.name}`)
   .then((res)=>{setMydata(res.data)});
   }

const deleteRec=(id)=>
   { axios.delete(`http://localhost:4000/students/${id}`).then((res)=> {alert("Deleted"); setMystate(mystate+1);});}

useEffect(()=>{
		showRecord();
	   },[mystate]);

if (mydata.length!==0)
   {
   	var status1=" Records are Found Below";
   }
   else
   {
   	var status2="No Record Found";
   }

	    return(
	    	<>
	     <h1> Welcome To MY Search API Page </h1>

          <div class="p-3">
              <div class="container-fluid form border border-danger border-5 rounded-5">
              <h1 style={{ color:"red" ,textDecoration:"underline green"}}>Search Name </h1>
                <label class="form-label" for="form3Example1c" style={{color:"green"}}>Name</label>
               <input type="text" name="name" id="name" class="form-control" value={input.name} onChange={handleInput}/>
               <input type="submit"class="form-control btn bg-danger"
                style={{ color:"white" ,marginTop:"10px"}} onClick={showRecord} value="Submit" />
                </div>
                </div>
                <h3 style={{color:"green"}}>{status1}</h3>
                <h3 style={{color:"red"}}>{status2}</h3>
                <table className="table border-1 w-50 m-2" style={{border: "2px solid red", textAlign:"center"}}>
          <tr className="table border-1 bg-info">
          <td> Name </td>
          <td> Roll No </td>
          <td> Address </td>
          <td colspan="2"> Action </td>
          </tr>
	     {mydata.map((key)=>
	     <> 
	     <tr style={{border: "2px solid red" ,textAlign:"center"}}>
	     <td style={{color:"green"}}>{key.name} </td> 
	     <td style={{color:"green"}}> {key.rollno} </td> 
	     <td style={{color:"green"}}>{key.Add} </td>
       <td><Link to={`/editrec/${key.id}`}> Edit Record </Link> </td>
       <td><button class="btn btn-outline-danger p-0 m-0" onClick={()=>deleteRec(key.id)}> Delete </button> </td>
	     </tr>
          </>
	     )}
	      </table>
          </>
		); 
	}
   
export default Search;
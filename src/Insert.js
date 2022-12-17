import	{useState ,useEffect} from "react";
import axios from "axios"
import './style.css'

const Insert=()=>
{
	const [mydata , setMydata]=useState([]);
  const [input , setInput]=useState({});
	const loadData=()=>
	{
		axios.get("http://localhost:4000/students").then((res)=> {setMydata(res.data)});
	}
	useEffect(()=>{
		loadData();
	}, []);
	
const handleInput=(e)=>
{
	let name=e.target.name;
	let value=e.target.value;
	setInput(values=>({...values,[name]:value}) );
	console.warn(input);

}
const saveData=()=>
	{
		var name=document.getElementById('name').value;
   var rollno=document.getElementById('rollno').value;
    var Add=document.getElementById('Add').value;

  if (name=="")
  {
  	alert("Please enter Name")
  	document.getElementById('name').focus();
  	return false;

  }
  if (rollno=="")
  {
  	alert("Please enter Rollno")
  	document.getElementById('rollno').focus();
  	return false;

  }
  if (Add=="")
  {
  	alert("Please enter Address")
  	document.getElementById('Add').focus();
  	return false;

  }

		axios
		.post("http://localhost:4000/students", input)
		.then((res)=>{
			alert("Data Saved!!");
			input.name="";
			input.rollno="";
			input.Add="";
		  loadData();
	});
}
	    return(
	    	<>
	     <h1 align="center"> Welcome To API DATA Insert Page </h1>
	        <div class="container px-4 text-center">
          <div class="row gx-5">
          <div class="col">
           <div class="p-3">
              <div class="container-fluid form border border-danger border-5 rounded-5">
              <h1 style={{ color:"red" ,textDecoration:"underline green"}}>Signup Form </h1>
                <label class="form-label" for="form3Example1c" style={{color:"green"}}>Name</label>
               <input type="text" name="name" id="name" class="form-control" value={input.name} onChange={handleInput}/>
               <label class="form-label pt-3 " for="form3Example1c" style={{color:"green"}}>Roll</label>
               <input type="text" name="rollno" id="rollno" class="form-control" value={input.rollno} onChange={handleInput}/>
               <label class="form-label pt-3" for="form3Example1c" style={{color:"green"}}>Add</label>
               <input type="text" name="Add" id="Add" class="form-control" value={input.Add} onChange={handleInput}/>
               <input type="submit"class="form-control btn bg-danger"
                style={{ color:"white" ,marginTop:"10px"}} onClick={saveData} value="Submit" />
                </div>
                </div>
                </div>
          <div class="col">
          <div class="p-3">
          <table className="table border-1 bg-info">
          <tr className="table border-1 bg-danger" style={{border: "2px solid red", color:"white" ,textAlign:"center"}}>
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
	      </div>
	      </div>
  </div>
</div>
	     
	    
          </>
		); 
	}
   
export default Insert;
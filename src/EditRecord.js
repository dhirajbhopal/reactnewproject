import	{useState ,useEffect} from "react";
import	{useParams} from "react-router-dom";
import axios from "axios"
import './style.css'

const EditRecord=()=>
{
	let {id}=useParams();
	const [record , setRecord]=useState([]);
	const loadData=()=>
	{
		axios.get(`http://localhost:4000/students/${id}`).then((res)=> {setRecord(res.data)});
	}
	useEffect(()=>{
		loadData();
	}, []);

const handleInput=(e)=>
{
	let name=e.target.name;
	let value=e.target.value;
	setRecord(values=>({...values,[name]:value}) );
}
const DataSave=()=>{
	axios.put(`http://localhost:4000/students/${id}`,record).then((res)=> {alert("Record Updated Successfully")});
}
	    return(
	    	<>
	     <h1 align="center"> Edit Student Record of {record.name} </h1>
	        <div class="container px-4 text-center">
          <div class="row gx-5">
          <div class="col-12">
           <div class="p-3">
              <div class="container-fluid form border border-danger border-5 rounded-5">
              <h2 style={{ color:"red" ,textDecoration:"underline green"}}>Update Record </h2>
                <label class="form-label" for="form3Example1c" style={{color:"green"}}>Name</label>
               <input type="text" name="name" id="name" class="form-control" value={record.name} onChange={handleInput}/>
               <label class="form-label pt-3 " for="form3Example1c" style={{color:"green"}}>Roll</label>
               <input type="text" name="rollno" id="rollno" class="form-control" value={record.rollno} onChange={handleInput}/>
               <label class="form-label pt-3" for="form3Example1c" style={{color:"green"}}>Add</label>
               <input type="text" name="Add" id="Add" class="form-control" value={record.Add} onChange={handleInput}/>
               <button class="form-control btn bg-danger"
                style={{ color:"white" ,marginTop:"10px"}} onClick={DataSave}> Update </button>
                </div>
                </div>
                </div>
                </div>
                </div>
          </>
		); 
	}
   
export default EditRecord;
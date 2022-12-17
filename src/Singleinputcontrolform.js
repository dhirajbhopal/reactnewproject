import { useState } from "react";
const Singleinputcontrolform =()=>
{
const [name, setName]=useState("");
const [rno,setRno]=useState("")
const handleName=(e)=>
{
	setName(e.target.value)
	console.log(name)
}

const handleRno=(e)=>
{
	setRno(e.target.value)
	console.log(rno)
}

const handleSubmit=(e)=>
{
	e.preventDefault();

}
   return(
   <>
        <body style={{backgroundColor:"#b6d9c9"}}>
         <form onSubmit={handleSubmit}>
           <h1 style={{ color:"white", marginLeft:"8%" ,textDecoration:"underline green"}}> Signup Form </h1>
              <div class="container-fluid form border border-danger border-5 rounded-5">
                <label class="form-label" for="form3Example1c" style={{color:"green"}}>Name</label>

               <input type="text" name="name" class="form-control" value={name} onChange={handleName}/>
               <label class="form-label" for="form3Example1c" style={{color:"green"}}>Roll</label>

               <input type="text" name="rno" class="form-control" value={rno} onChange={handleRno}/>
               <input type="submit"class="form-control btn bg-danger w-25"
                style={{ color:"white", marginLeft:"32%" ,marginTop:"10px"}} value="Submit" />
                </div>
                </form>
                </body>
                </>
);
}
export default Singleinputcontrolform;
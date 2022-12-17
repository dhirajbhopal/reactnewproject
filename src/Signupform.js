import { useState } from "react";
const Signupform=()=>
{
const [input, SetInput]=useState({})
const handleInput=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  SetInput(values=>({...values,[name]:value}));
  console.log(input);
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

               <input type="text" name="name" class="form-control" value={input.name} 
               onChange={handleInput} />

               <label class="form-label" for="form3Example1c" style={{color:"green" ,paddingTop:"25px"}}> Email Id:- </label>
               
               <input type="text" name="email" class="form-control" value={input.email}  
               onChange={handleInput}  />

              <label class="form-label" for="form3Example1c" style={{color:"green" ,paddingTop:"25px"}}> Password:- </label>
               
               <input type="password" name="password" class="form-control" value={input.password} onChange={handleInput} />

               <input type="submit"class="form-control btn bg-danger w-25"
                style={{ color:"white", marginLeft:"32%" ,marginTop:"10px"}} value="Submit" />
                </div>
                </form>
                <br /><br /><br /><br /><br />
                </body>
  </>
  );
}
export default Signupform;
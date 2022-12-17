import ReactDOM from 'react-dom'
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import './style.css';

const Layout=()=>
{

   const myFunction=()=>{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


	return(
	     <>
      <div className="topnav" id="myTopnav">
           <a><Link to="/"> Home </Link></a>
           <a><Link to="About">About</Link> </a>
           <a><Link to="Collegedetail">Colleges</Link></a>
           <a><Link to="Blog">Blog</Link></a>
           <a><Link  to="Contact">Contact</Link></a>
           <a><Link  to="Signupform">Signupform</Link></a>
           <a><Link  to="Events">Events </Link></a>
           <a><Link  to="Calculator">Calculator </Link></a>
           <a><Link  to="Usestatehook">useState hook</Link> </a>  
           <a><Link  to="Singleinputcontrolform">Single Input</Link> </a>  
           <a><Link  to="Bmr">BMR</Link></a>
           <a><Link  to="UseState"> UseStateHook2</Link> </a>  
           <a><Link  to="UseEffectfirst">UseEffect First</Link> </a> 
           <a><Link  to="API">API Student Rec</Link> </a>
           <a><Link  to="Insert">INSERT</Link> </a> 
           <a><Link  to="Edit">Edit</Link> </a>
           <a><Link  to="Delete">Delete</Link> </a> 
           <a><Link  to="Search">Search</Link> </a>
           <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars fa-2x" stylr={{color:"white",fontSize:"100px"}}></i></a> 
      </div>
	    <Outlet />
	    <Footer />
          </>
		);
	}
   
export default Layout;
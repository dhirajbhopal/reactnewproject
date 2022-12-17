import Mycollege from './Mycollege';
const Collegedetail=()=>
{
	
const College=[
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"NIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Bits",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"RKSF",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"AITR",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"MANIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Radha Ranam",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"BITS",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},

{
	name:"VIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Medical",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Makhanlal",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech"
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"NIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Bits",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"RKSF",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"AITR",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"MANIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Radha Ranam",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"BITS",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},

{
	name:"VIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Medical",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"Makhanlal",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech"
},
{
	name:"TIT",
	address:"Bhopal",
	contact:"78658900",
	course:"B.Tech , Mtech",
}


];
const collegelist=College.map((key)=> <Mycollege mycol={key.name} myadd={key.address} 
	mycot={key.contact} mycour={key.course} />);
	return(
		<>
   <h1 className="collegeheader"> Welcome to College List</h1>
   <div class="row">
   {collegelist}
   </div>
	</>
	);
  }
   
export default Collegedetail;
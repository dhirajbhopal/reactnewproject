import './style.css';
const Bmr=()=>
{
	const CalBMR=()=>{
		let age=document.getElementById('age').value;
		let height=document.getElementById('height').value;
		let weight=document.getElementById('weight').value;
		let cm=height*30.48
		let ans=(88.362 + (13.397 * weight)+(4.799 * cm)-(5.677 * age)).toFixed(2)
		
		var status="GOOD";
		document.getElementById('ans').style.color = "green";
		if (ans<1000)
		{
			status="Very Bad";
			document.getElementById('ans').style.color = "red";
		}
		if (ans>1500)
		{
			status="Bad";
			document.getElementById('ans').style.color = "orange";
	    }
	    document.getElementById('ans').innerHTML=" Your BMR is : " +ans+ " This is " +status+ " for you"
	    document.getElementById('cm').innerHTML="Height in CM is:- " +cm
	}

	return(
	     <>
	     <body style={{backgroundColor:"#b6d9c9"}} />
	     <h1> Welcome BMR Calculator </h1>
	     Enter Age:- <input type="text" id="age" /><br /> <br />
	     Enter Height:- <input type="text" id="height" placeholder="height in Feet" /> <span id="cm"> </span> <br /> <br />
	     Enter Weight:- <input type="text" id="weight" /><br /> <br />
	     <input type="button" onClick={CalBMR} value="Check BMR" />
	     <h1 id="ans"> </h1>
          </>
		); 
	}
   
export default Bmr;
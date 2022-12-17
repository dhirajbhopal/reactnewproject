import './style.css';
const Events=()=>
{
	const Display=(a,b,c,e)=>
	{ 
		var d=a+b+c

		alert("Sum of NUmber is :-"+ d + "My Events is:-" + e.type);

	}
	return(
        <>
        <body style={{backgroundColor:"#b6d9c9"}}>
        <h1> Welcome to Events Functions </h1>
        <button class="btn bg-success me-3" onMouseOver={(event)=>Display(5,20,9, event)}> Events Check </button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        </body>
        </>
		);
}
export default Events
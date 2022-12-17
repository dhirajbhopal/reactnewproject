
import './style.css';
const Mycollege=(props)=>
{
	return(
    <>
  <div className="card col-3 box border-danger rounded rounded-4">
  <table>
    <tr><td className="collegelistdata" colspan="3"> College Details </td></tr>
    <tr><td className="item"> College Name </td><td>:- </td>
    <td className="data">{props.mycol}</td></tr>
    <tr><td className="item"> Address</td><td>:- </td>
    <td className="data"> {props.myadd} </td></tr>
    <tr><td className="item">Contact No</td><td>:- </td>
    <td className="data"> {props.mycot} </td></tr>
    <tr><td className="item">Courses</td><td>:- </td>
    <td className="data"> {props.mycour} </td></tr>
    </table>

</div>
  </>
  	);

}
export default Mycollege;

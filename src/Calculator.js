import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom'
import './style.css';

const Calculator=()=>
{
const Delete=()=>
	{
		let mydata=document.getElementById('mytext').value;
		let deletedata=mydata.slice(0,-1);
		document.getElementById('mytext').value=deletedata;
}
 
const Ans=()=>
 {
 	const newsans=eval(document.getElementById('mytext').value);
 	document.getElementById('mytext').value=newsans;
}

 const Hidecode =()=>{
       $(document).ready(function(){
        $('#pwr').click(function(){
        $('#div1').toggle();
        });
        });
 	}

 
	return(
		<>
		   <body style={{backgroundImage:"url('images/img2.jpeg')",padding:"10px",height:"610px"}}> 
		   <div  class="calculatorbox3" style={{backgroundImage:"url('images/img1.jpeg')"}}>
		    <span style={{marginLeft:"25%", color:"white", fontSize:"30px"}}>CALCULATOR </span>
            <div class="calculatorbox" id="div1">
            <input id="mytext" style={{margin:"2%", width:"95%", backgroundColor:"#595551", color:"white" ,height:"17%", borderRadius:"15px" ,fontSize:"20px"}} type="text" />
            <button class="btn bg-info but" id="btn1" value="1" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn1').value}>1</button>
            <button class="btn bg-info but" id="btn2" value="2" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn2').value}>2</button>
            <button class="btn bg-info but" id="btn3" value="3" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn3').value}>3</button>
            <button class="btn bg-info but" id="btn4"value="4" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn4').value}>4</button><br />
            <button class="btn bg-info but" id="btn5"value="5" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn5').value}>5</button>
            <button class="btn bg-info but" id="btn6"value="6" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn6').value}>6</button>
            <button class="btn bg-info but" id="btn7" value="7" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn7').value}>7</button>
            <button class="btn bg-info but" id="btn8"value="8" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn8').value}>8</button><br />
            <button class="btn bg-info but" id="btn9" value="9" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn9').value}>9</button>
            <button class="btn bg-info but" id="btndot" value="." onClick={()=>document.getElementById('mytext').value+=document.getElementById('btndot').value}>.</button>
            <button class="btn bg-info but"  id="btn0"value="0" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btn0').value}>0</button>
            <button class="btn bg-warning but" id="btnplus" value="+" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnplus').value}>+</button><br />
            <button class="btn bg-warning but"  id="btnminus"value="-" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnminus').value}>-</button> 
            <button class="btn bg-warning but" id="btnmulti"value="*" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btnmulti').value}>*</button>
            <button class="btn bg-warning but" id="btndiv"value="/" onClick={()=>document.getElementById('mytext').value+=document.getElementById('btndiv').value}>/</button>
            <button class="btn bg-success but" id="btnans" onClick={Ans}>Ans</button> <br />
            <button class="btn bg-danger but" id="btndel" value="1" onClick={Delete}>Del</button>
            <button class="btn bg-dark but" onClick={()=>document.getElementById('mytext').value=""}>Clr</button>
            </div>
            <div class="calculatorbox2">
            <button class="btn btn-outline-success but3" id="new" id="pwr" onClick={Hidecode}>Power ON/OFF</button>
            </div>
            </div>
            </body>
           
            
  </>
		); 
	}

export default Calculator;
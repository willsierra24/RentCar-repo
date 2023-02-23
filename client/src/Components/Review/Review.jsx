import React, { useState } from "react";
import "./Review.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

import {useSelector, useDispatch } from "react-redux";

export default function createReview () {
const allBilling = (useSelector((state) => state.allbilling));
const [current,setcurrent] = useState (0)
//----------
let detail = ""
const { user } = useAuth0();
allBilling.map((bill)=>{
  bill.user.eMail===user.email?detail = bill:null
})
console.log(detail);
//---------
const temp =[];
temp.push (detail.car._id)
temp.push (0)
temp.push ("")
detail.accessories.map ((data)=>{
  temp.push (data._id)
  temp.push (0)
  temp.push ("")
})
const [qualify,setqualify] =useState (temp);
function Save(e) {
  e.preventDefault(); 
  let complet = true;
  for (let c=0;c<qualify.length;c=c+3){
    qualify[c+1]===0? (
      complet= false,
      Swal.fire({
        title: 'There are unrated articles (stars)!',                
        icon: 'warning',
        confirmButtonColor: '#e38e15',
        confirmButtonText: 'Ok',
      })
      ):null
    qualify[c+2].length < 10 || qualify[c+2].length > 500? (
      complet= false,
      Swal.fire({
        title: 'Comments are required (between 10 and 500 characters)!',                
        icon: 'warning',
        confirmButtonColor: '#e38e15',
        confirmButtonText: 'Ok',
      })
      ):null

  }
  complet? (
    detail.accessories=[], 
    detail.car._id ="", 
    Swal.fire({
    title: 'Srade submitted successfully!',                
    icon: 'warning',
    confirmButtonColor: '#e38e15',
    confirmButtonText: 'Ok',
    }),
    setcurrent(current+1)
  ):null
}
function cl (e){
  e.preventDefault(); 
  let cliced = e.target.className.split('|'); 
  const tempor = qualify
  tempor[((parseInt(cliced[0])+1)*3)+1] = parseInt(cliced[1]);
  setqualify (tempor)
  setcurrent(current+1)
}
function changeComment(e){
  e.preventDefault();
  const tempor = qualify 
  tempor[((parseInt(e.target.className)+1)*3)+2] = e.target.value;
  setqualify (tempor)
  setcurrent(current+1)
}
  return (
    <>
      <NavBar></NavBar>

      <div className="reviewContenedor"> 
        <div id="reservedTittle" className="reservedTittle">Accessories and vehicles or qualify</div> <br /><br />

        <div>
        {detail.car._id !== ""?
          <div>
            <div id="reviewNameStar">
              <h4 id="reviewName">{detail.car.line} </h4> 
              <div id="reviewStart">
                {qualify[1] >= 1? <button onClick={(e)=>cl(e)} id="starTrue" className="-1|1">★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className="-1|1">☆</button>}
                {qualify[1] >= 2? <button onClick={(e)=>cl(e)} id="starTrue" className="-1|2">★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className="-1|2">☆</button>}
                {qualify[1] >= 3? <button onClick={(e)=>cl(e)} id="starTrue" className="-1|3">★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className="-1|3">☆</button>}
                {qualify[1] >= 4? <button onClick={(e)=>cl(e)} id="starTrue" className="-1|4">★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className="-1|4">☆</button>}
                {qualify[1] >= 5? <button onClick={(e)=>cl(e)} id="starTrue" className="-1|5">★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className="-1|5">☆</button>}
              </div>
            </div>
            <textarea value={qualify[2]} id="reviewDetail"placeholder = "Comment:" className="-1" onChange={(e)=>changeComment(e)}/>          
          </div>:null}

          {detail.accessories.map((acce,index) => (             
            <div>
            <div id="reviewNameStar">
              <h4 id="reviewName">{acce.name} </h4> 
              <div id="reviewStart">  
                {qualify[((index+1)*3)+1] >= 1? <button onClick={(e)=>cl(e)} id="starTrue" className = {index +"|1"} >★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className = {index +"|1"} >☆</button>}
                {qualify[((index+1)*3)+1] >= 2? <button onClick={(e)=>cl(e)} id="starTrue" className = {index +"|2"} >★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className = {index +"|2"} >☆</button>}
                {qualify[((index+1)*3)+1] >= 3? <button onClick={(e)=>cl(e)} id="starTrue" className = {index +"|3"} >★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className = {index +"|3"} >☆</button>}
                {qualify[((index+1)*3)+1] >= 4? <button onClick={(e)=>cl(e)} id="starTrue" className = {index +"|4"} >★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className = {index +"|4"} >☆</button>}
                {qualify[((index+1)*3)+1] >= 5? <button onClick={(e)=>cl(e)} id="starTrue" className = {index +"|5"} >★</button>: <button onClick={(e)=>cl(e)} id="starFalse" className = {index +"|5"} >☆</button>}
              </div>
            </div>
            <textarea value={qualify[((index+1)*3)+2]} id="reviewDetail"placeholder = "Comment:" className={index} onChange={(e)=>changeComment(e)} />          
          </div> 
          ))}  
        </div> <br /> 
        <div className="reviewButon">
            <button id="confir" onClick={(e)=>Save(e)}>Send</button>
        </div><br />
      </div>

      <Footer></Footer>
    </>
  );
}
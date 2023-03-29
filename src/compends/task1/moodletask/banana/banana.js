import React,{useState} from "react";
import Grap from './grapes.png'
import Bana from './banana.png'
import { Button } from "bootstrap";
import './banana.css'

export function Banana(){
  const[banan,setBanan]=useState(0);
  const[grap,setGrap]=useState(0);
    function resert(){
      setBanan(banan*0)
      setGrap(grap*0)
    }
    return(
        <div className="container ">
          <div className="row">

             <div className="col-lg-2"></div>
             <div className="row col-lg-8 bg-secondary m-5">
                <h1 className="col-lg-12 text-center mb-2">Hari ate <span className="text-primary">{grap}</span> Graps <span className="text-warning">{banan}</span> Banana</h1>
                <div className="col-lg-6 text-center  ">
                      <img src={Grap} className="col-lg-8 mb-1"/><br/>
                      <button   onClick={()=>{setGrap(grap+1)}} className="bananabtn mb-2 p-1 bg-danger">Grap</button>
                </div>
                <div className="col-lg-6 text-center">
                     <img src={Bana} className="col-lg-12"/><br/>
                     <button onClick={()=>{setBanan(banan+1)}} className="bananabtn mb-1 p-1 bg-warning">Banana</button>
                </div>
                <div className="col-lg-12 text-center mb-5 mt-5">
                  <button onClick={resert}className="bananabtn bg-info p-1">Resert</button>
                </div>
             </div>
             <div className="col-lg-2"></div>
          </div>
        </div>






    );
}
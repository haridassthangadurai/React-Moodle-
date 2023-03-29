import React from "react";
import face from './face.png';
import watch from './watch2.png';
import './card.css';
import 'bootstrap/dist/css/bootstrap.css'
export function Card(){
    return(
            <div className="body container-fluid">
                 <h1 className="text-center">Congratulation</h1>
                <div className="row p-5 text-center" >
               
                    <div className="col-lg-4 ">

                    </div>
                    
                    <div className="card1 col-lg-4  pt-5 pb-5  "> 
                        
                        <img src={face} className="col-lg-3  "/>
                        <h1>Haridass</h1>
                        <p>KGISL Microcollege saravanapatty</p>
                        <img src={watch} className="col-lg-3"/>
                   </div>
                <div className="col-lg-4">

                 </div>
                </div>
            </div>
       

    );

}

// <div className="card1"> 
// <h1>Congratulation</h1>
//     <img src={face}/><br/>
//     <h1>Haridass</h1><br/>
//     <p>KGISL Microcollege saravanapatty</p><br/>
//     <img calssName="watch1"src={watch}/>
// </div>

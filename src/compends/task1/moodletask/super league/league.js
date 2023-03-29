import React from "react";
import rcb from './rcb1-img.png'
import csk from './csk1-img.png'
import 'bootstrap/dist/css/bootstrap.css'
import './league.css'
export function League(){
    return(
        
        <div className=" league row bg-dark p-3">
            
            <div className="col-lg-3">

            </div>
                    <div className="col-lg-6  text-center pt-2 pb-5 ">
                    <h1>Super Over League</h1>
                    <img src={rcb} width="300"/>
                    <img src={csk} width="300"/>
                    </div>

            <div className="col-lg-3">
                
             </div>
        </div>
    );
}

import React from "react";
import './noti.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons"

export function Noti(){
    return(
        <>
        <div className="container-fluid">
           <div className="row">
              
              <div className="col-lg-4"></div>
               <div className="col-lg-4 mt-5">
                  <div>
                     <h1 className="text-center">Notification</h1>
                  </div>
                  <div>
                  <div className="bg-primary m-3 p-3 text-light"><FontAwesomeIcon icon={faCircleCheck }/>Information Message</div>
                  <div className="bg-success m-3 p-3 text-light"><FontAwesomeIcon icon={faCircleCheck }/>Sucess Message</div>
                  <div className="bg-warning m-3 p-3 text-light"><FontAwesomeIcon icon={faBell}/>warning Message</div>
                  <div className="bg-danger m-3 p-3 text-light"><FontAwesomeIcon icon={faCircleInfo}/>Error Message</div>
                  </div>
               </div>
              <div className="col-lg-4"> </div>
           </div>
         </div>
        
        </>

    );
}
import React from "react";
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import loginmg from './Login Pic.png'
import {faEnvelope,faLock,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Login(){
    return(
       <div className="clr p-5">
         <div className="container-fluid row bg-light center p-1 div">
             <div className="col-lg-6 col-12 text-center">
               <img src={loginmg} className="col-lg-6 col-12 mt-2"/>
             </div>
             <div className="col-lg-6  text-center col-12  ">
                <legend>Member login</legend>
                <span className="spanlogin col-12 p-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <input type="email" placeholder="Enter your Email " className="loginemail p-1"/>
                </span><br/>

                <span className="spanlogin col-12 p-2">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="*********" className="loginemail p-1"/>
                </span><br/>

                <input type= "button" value = "Login" size="22"  className="p-2 col-12 bg-success btnlogin text-white mt-5"/><br/><br/>
                 <p>Forget <span className="text-success">User Name / Password ?</span></p>
                 <p className="text-success">Create your Account<FontAwesomeIcon icon={faArrowRight} /></p>


             </div>


         </div>

       </div>
    );




}
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './smile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFaceSmile,faFaceMeh,faFaceGrinTears} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export function Smile(){
    return(
        <div className="smilebody">
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-lg-2"></div>
                     <div className="col-lg-8 bg-light m-3 smileborder">
                     <h1 className="text-center col-lg-12">How satified are you with our customer support performance?</h1>
                     <div className="row justify-content-around">
                        <Link to='/Heart'><FontAwesomeIcon icon={faFaceSmile} className=" smlie mb-1" /></Link>
                        <Link to='/Heart'><FontAwesomeIcon icon={faFaceMeh} className=" smlie mb-1" /></Link> 
                        <Link to='/Heart'><FontAwesomeIcon icon={faFaceGrinTears} className="smlie mb-1" /></Link>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
        </div>
    );
}
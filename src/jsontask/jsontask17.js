import React from "react";
import "./jsontask17.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
export function Profilemenu(){

return(
    <div className="profilemenubody1">
         <div className="profilemenubody">
          
         
         <nav className="navbar navbar-expand-lg navbar-light profilemenunav">
               <a className="navbar-brand" href="#"><span className="porfilename1">LOGO</span></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link" href="#"><input type="button" name="button" value="Find Candidates" className="profilemenubtn"/></a>
                            </li>
                            <li className="nav-item active  ">
                             <a className="nav-link" href="#"><span className="porfilename">Find Jobs</span></a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="#"><span className="porfilename">Find Compaines</span></a>
                            </li>
                         <ul className="navproflie">
                            <li className="nav-item active">
                              <a className="nav-link"><FontAwesomeIcon icon={faBell} className="profilemenubtn3"/></a>
                            </li>
                            <li className="nav-item active">
                             <a className="nav-link "><input type="button" name="button" value="Login" className="profilemenubtn1"/></a>
                            </li>
                            <li className="nav-item active">
                               <a className="nav-link"><input type="button" name="button" value="Regiter" className="profilemenubtn2"/></a>
                            </li>
                         </ul>
                       </ul>
                     </div>
          </nav>
                         <div className="container-fluid py-5">
                              <h1 className="text-center profiletext pt-lg-5 pb-lg-3">Find the candidates as per your requirements</h1>
                                <div className="cent pb-lg-5 ">
                                 <div className="row bg-light p-2 justify-content-center w-75 bord">
                                     <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 mt-1"/>
                                     <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Job Title / Keyword"/>
                                     <FontAwesomeIcon icon={faLocationDot}className="p-2 mt-1" />
                                     <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                                     <button className="btn profilemenubtn2 my-2 px-5 my-sm-0" type="submit">Search</button>
                                 </div>
            </div>
            </div>
            </div>

           </div>
           

);


}
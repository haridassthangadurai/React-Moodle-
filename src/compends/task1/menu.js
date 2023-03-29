import React from "react";
import'bootstrap/dist/css/bootstrap.css'
import'bootstrap/dist/js/bootstrap.bundle'
import { Link } from "react-router-dom";
export function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">MY Works</a>
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse text-white ml-5" id="navbarNav">
                                 <ul className="navbar-nav">
                                    <Link to='/Hello'><li className="nav-item active ml-5 text-secondary">Home </li></Link>
                                    <Link to='/Card'><li className="nav-item active ml-5 text-secondary ">Card </li></Link>
                                    <Link to='/League'><li className="nav-item active ml-5 text-secondary">Super League</li></Link>
                                    <Link to='/Social'><li className="nav-item active ml-5 text-secondary">Social</li></Link>
                                    <Link to='/Noti'><li className="nav-item active ml-5 text-secondary">Notification</li></Link>
                                    <Link to='/Login'><li className="nav-item active ml-5 text-secondary">Login</li></Link>
                                    <Link to='/Tech'><li className="nav-item active ml-5 text-secondary">TeachCard</li></Link>
                                    <Link to='/Count'><li className="nav-item active ml-5 text-secondary">Hook</li></Link>
                                    <Link to='/Fruit'><li className="nav-item active ml-5 text-secondary">Fruit</li></Link>
                                    <Link to='/Smile'><li className="nav-item active ml-5 text-secondary">Feedback</li></Link>
                                </ul>
                             </div>
        </nav>
        
        </>


    );
}

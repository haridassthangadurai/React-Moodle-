import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './social.css'
export function Social(){
    return(
        <div className="social container-fluid">
            <div className="row p-5">
                <div className="col-lg-4">

                </div>
                    <div className="col-lg-4">
                        <h1 className=" socialname col-lg-12 text-center p-5">Social Button</h1>
                        <div className="d-flex  justify-content-around" >
                            <button className=" socialbtn bg-warning">Like</button>
                            <button className=" socialbtn">comment</button>
                            <button className=" socialbtn bg-primary">Share</button>
                        </div>
                    </div>
                <div className="col-lg-4">

                </div>



            </div>


        </div>




    );
}
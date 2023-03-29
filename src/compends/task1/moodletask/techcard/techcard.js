import React from "react";
import './techcard.css'
import 'bootstrap/dist/css/bootstrap.css'
import DS from './ds.png'
import Not from './not.jpg'
import Vr from './vr.png'
import Ml from './ml.jpg'
export function Tech(){
   return(
    <div className="tech">
    <div className=" container">
        <div className="row">
            <div className="col-lg-2"></div>
               <div className="col-lg-8 m-5">
                 <div className="row">
                 <div className="col-lg-12 text-center mt-5">
                            <h1>Learn 4.0 Technologies</h1>
                            <p>Learning the basics can begin with taking a technology course or earning a technology certificate. Foundational technology courses typically approach the subject from a beginner's level, which can be useful for students with little to no experience.</p>
                        </div>
                    <div className="card card1 col-lg-5 m-1">
                        <div className="card-body">
                            <h1 className="card-title">Data Scientist</h1>
                             <p className="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data. </p>
                             <img src={DS} className="col-lg-6 float-right"/>
                        </div>
                    </div>

                    <div className="card card2 col-lg-5 m-1 ">
                        <div className="card-body">
                            <h1 className="card-title">NOT Developer</h1>
                             <p className="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data. </p>
                             <img src={Not} className="col-lg-6 float-right"/>
                        </div>
                    </div>
                    <div className="card card3 col-lg-5 m-1">
                        <div className="card-body">
                            <h1 className="card-title">VR Developer</h1>
                             <p className="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data. </p>
                             <img src={Vr} className="col-lg-6 float-right"/>
                        </div>
                    </div>

                    <div className="card card4 col-lg-5 m-1">
                        <div className="card-body">
                            <h1 className="card-title">ML engineer</h1>
                             <p className="card-text">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, knowledge and insights from noisy, structured, and unstructured data.structured, and unstructured data. </p>
                             <img src={Ml} className="col-lg-6 float-right"/>
                        </div>
                    </div>

               </div>
        <div className="col-lg-2"></div>





               </div>
        </div>
    </div>
    </div>
   );

}
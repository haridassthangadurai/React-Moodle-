import React from "react";
import './datefuction.css'
export function Datefunction(){

    function calculate() 
    {
        var coDate = document.getElementById("coDate").value;
        var div = document.getElementById("divid");
        var date = new Date(coDate);
        date.setDate(date.getDate()+90);
        var temp = date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
        div.innerText = "End Date : " + temp;
    }

    return(
        <>
        <div className="weatherbody">
        <div className="container dataclass">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 bg-dark">
           <label className="text-light">Select Course Starting Date : </label><br/>
            <input type="date" id="coDate" className="my-2"/><br/>
            <input type="button" onClick={calculate} value="calculate" className=" datefun my-2"/>
           <div id="divid" className="text-primary">

           </div>
           </div>
           <div className="col-lg-4"></div>
           </div>
           </div>
        </>
    )
}


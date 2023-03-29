import React,{useState} from "react";
import './incresedecrese.css'
export function Counter(){
    const[Add,setAdd]=useState(1);
   

    return(
       <div className="container  mt-5">
          <div className="row">
            <div className="col-lg-4"></div>
                <div className="col-lg-4 bg-secondary countradius m-5">
                <h1 className="text-center mt-5">{Add}</h1>
                  <div className="justify-content-around mt-5 p-5">
                <button onClick={()=>{setAdd(Add+1)}} className="p-1 mb-5 bg-success col-lg-4 countbtn">ADD</button>
                <button onClick={()=>{setAdd(Add-1)}} className="p-1 mb-5 bg-primary col-lg-4 countbtn">LESS</button>
                <button onClick={()=>{setAdd(Add*0)}} className="p-1 mb-5 bg-danger col-lg-4 countbtn">Resert</button>
                </div>
                </div>
                <div className="col-lg-4"></div>
          </div>
       </div>

    );
}
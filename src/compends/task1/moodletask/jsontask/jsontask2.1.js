import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom";

export function Sample2(){
    const[product,setProduct]=useState([])
    const{id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    })
   return(
    <div className="container">
        <div className="row m-5 ">
            <div className="col-lg-6">
          
                <img src={product.image} className="col-lg-8 h-50%"/>
            </div>
            <div className="col-lg-6 mt-5 p-2">
            <h4 className="card-title">{product.title}</h4>
                            <p className="card-text">{product.price}</p>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.category}</p>
                            {/* <p className="card-text"><FontAwesomeIcon icon={faStar} className="text-warning"/>{product.rating}</p> */}
                            <button className="col-lg-4 btn bg-primary">View</button>
        
                     </div>

        </div>
    </div>
    
   )

}


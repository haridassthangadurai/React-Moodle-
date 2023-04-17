import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
// import './food.css'
 export function Sample1(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduct(json))
    } )
        return(
          <> 
          <div className="foodbody">
             <div className="container-fluid">
            <div className="row justify-content-between p-3">
          { 
              product.map((value,index)=>(
                <>
              
              <div className="card col-lg-3 ml-4 mt-5 " id="Products">
                                  
                                  <img src={value.image} className="card-img-top text-center col-lg-7"/>
                                <div className="card-body">
                                    <h5 className="card-title ">{value.title}</h5>
                                    <p className="card-text font-weight-bolder"> ${value.price}</p>
                                    <StarRatings
                                            rating={value.rating.rate}
                                            starDimension="15px"
                                            starSpacing="1px"
                                            starRatedColor="gold"
                            />
                                  <Link to={`/Sample2/${value.id}`} >  <button className='bt_card bg-primary'>Add cart</button> </Link>
                                   </div> 
                             
                          </div>


           
                </>
              ))
           
               }

               </div>
               </div>
               </div>
          </>
     );


 }



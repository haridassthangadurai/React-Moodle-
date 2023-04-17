import React,{useEffect, useState} from "react";
import './food.css'
import StarRatings from "react-star-ratings";
 export function Sample(){
    const[food,setFood]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/food.json")
        .then(add=>add.json())
        .then(hari=>setFood(hari))
    } )
        return(
          <> 
          <div className="foodbody">
             <div className="container">
            <div className="row justify-content-between p-3">
          { 
              food.map((value,index)=>(
                <>
              
                <div className="col-lg-4 mt-5">
                    <div className="card foodcard p-3">
                    <img src={value.product_img} className=" card-img-top text-center col-lg-12"/>
                        <div className="card-body text-center">
                            <h3 className="card-title">{value.product_name}</h3>
                            <StarRatings
                                     rating={value.product_rateing}
                                   starDimension="30px"
                                  starSpacing="10px"
                                  starRatedColor="yellow"
                                                    />
                            <h3 className="card-text">{value.product_rate}</h3>
                            

                        </div>
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



import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import {CartPlusIcon,MinusCircleIcon} from 'react-line-awesome'
import "./Product.css"

const Product = (props) => {

    const toCart = () => {
       inCart()?removeFromCart():addToCart(props.item);        
    };
    
    const addToCart=(el)=>{
        props.propCart.setCart(c=>([...c,el]));
    };

    const removeFromCart=()=>{
        props.propCart.setCart(c=>c.filter((p)=>p.name!=props.item.name))
    }

 const inCart=()=>{
     console.log(props.propCart.cart)
     for(var e of props.propCart.cart)
     {
         console.log(e,"e")
        if(e.name==props.item.name) 
            return true
     }
     return false
 }
    // useEffect(()=>{
    //         console.log(props)
    // },[props])
    console.log(inCart())
    return (
        <div className="productBox">
            <div className="productImg">
                {/* <img src="" width="180" height="180"/> */}
            </div>
            <div className="productDetails">
                <h3>{props.item.name}</h3>
                <div className="addBtn" onClick={toCart}>
                   {
                   inCart()?
                   <MinusCircleIcon style={{fontSize:"20px"}}/>
                   :<CartPlusIcon  style={{fontSize:"20px"}}/>} 
                    </div>
                <div className="productPrice">
                    <h4>{props.item.price}</h4>
                    <span>
                        <StarRatings
                            rating={props.item.rating}
                            starRatedColor="gold"
                            starDimension="13px"
                            starSpacing="1px"
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product

import React, { useState } from 'react'
import Product from "../Product/Product"
import {ShoppingBagIcon,MapPinIcon,CalendarDayIcon,ArrowCircleLeftIcon} from 'react-line-awesome'
import "./Cart.css"

const Cart = (props) => {
    const [cartOpen,setCartOpen]=useState(false);

    const openCart=()=>{
        setCartOpen(cartOpen=>!cartOpen)
        if(cartOpen)
        document.getElementById("deskC").style.display="block";
        else
        document.getElementById("deskC").style.display="none";
      }

    return (
        <div className="cartArea">
            <div className="mobileCart" onClick={openCart}>
            Cart<ArrowCircleLeftIcon/>
            </div>
            <div className="deskCart" id="deskC">
             <div className="cartHeading">
                <h2>Cart</h2>
                <ShoppingBagIcon className="shopIcon"/>
            </div>
            <div className="cartProducts">
                  {
                  props.cart.length >0 ?
                    props.cart.map(p=>{
                        return(<Product item={p} propCart={props}/>)
                    })
                  :<p>What's new designer??</p>
                  } 
            </div>
            <div className="cartDeliver">
                <span><MapPinIcon/> Home</span>
                <span><CalendarDayIcon/><input type="date" hidden="true"/> Date</span>
            </div>
            <button>
                Order Now
            </button>
        </div>
        </div>
        
    )
}

export default Cart

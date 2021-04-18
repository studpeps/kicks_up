import React from 'react'
import Product from "../Product/Product"
import {ShoppingBagIcon,MapPinIcon,CalendarDayIcon} from 'react-line-awesome'
import "./Cart.css"

const Cart = (props) => {
    return (
        <div className="cartArea">
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
    )
}

export default Cart

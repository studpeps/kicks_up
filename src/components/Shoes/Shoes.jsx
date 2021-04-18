import React from 'react'
import Product from "../Product/Product"
import {SearchIcon} from 'react-line-awesome'
import "./Shoes.css"

const Shoes = (props) => {
    let shoeProduct=[
        {
            "name":"KSL01",
            "price":"Rs 1500",
            "rating":3.5,
            "image":"../../Images/shoe1.jpg"
        },
        {
            "name":"KSL02",
            "price":"Rs 2500",
            "rating":3.8,
            "image":"../../Images/shoe2.jpg"
        },
        {
            "name":"KSL03",
            "price":"Rs 500",
            "rating":3.5,
            "image":"../../Images/shoe3.jpg"
        },
        {
            "name":"SL012",
            "price":"Rs 1500",
            "rating":4.5,
            "image":"../../Images/shoe1.jpg"
        },{
            "name":"PSL01",
            "price":"Rs 2500",
            "rating":4.0,
            "image":"../../Images/shoe2.jpg"
        },{
            "name":"SSL01",
            "price":"Rs 3500",
            "rating":5.0,
            "image":"../../Images/shoe3.jpg"
        }
    ]

    return (
        <div className="shoeArea">
            <div className="shoeHeading">
                <h2>Shoes</h2>
                <div className="searchShoe">
                <SearchIcon style={{transform: "scaleX(-1)"}}/>
                <select>
                <option selected disabled>Sort by</option>
                    <option>Popularity</option>
                    <option>High to Low(Price)</option>
                    <option>Low to High(Price)</option>
                </select>
                </div>
            </div>
            <div className="productArea">
                {shoeProduct.map((item)=>{
                    return <Product propCart={props} item={item}/>;
                })}
            </div>
        </div>
    )
}

export default Shoes

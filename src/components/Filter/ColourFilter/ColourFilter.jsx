import React from 'react'
import "./ColourFilter.css"

const ColourFilter = (props) => {
    const cc=props.color;
    return (
        <input type="checkbox" style={{backgroundColor:cc}} className="colorBox"/>
    )
}

export default ColourFilter


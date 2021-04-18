import React from 'react'
import "./Filter.css"
import ColourFilter from "./ColourFilter/ColourFilter"
import {FilterIcon} from "react-line-awesome"

const Filter = () => {
    const Checkbox = props => (
        <input type="checkbox" {...props} />
      )
    return (
        <div className="leftArea">
            <div className="filterHeading">
                <h2>Filters</h2>
                <FilterIcon className="filterIcon"/>
            </div>
            <div>
                <h3>Cost</h3>
                <div className="criteriaArea">
                    <Checkbox/>Rs 1500-4000
                    <br></br>
                    <Checkbox/>Rs 4001-7000
                    <br></br>
                    <Checkbox/>Rs 7001+
                </div>
            </div>
            <div>
                <h3>Colour</h3>
                <div className="criteriaArea">
                    <ColourFilter color="red"/>
                    <ColourFilter color="blue"/>
                    <ColourFilter color="green"/>
                    <ColourFilter color="yellow"/>
                    <ColourFilter color="gold"/>
                </div>
            </div>
            <div>
                <h3>Design Templates</h3>
                <div className="criteriaArea">
                <Checkbox/>2
                    <br></br>
                    <Checkbox/>3
                    <br></br>
                    <Checkbox/>3+
                </div>
            </div>
            <div>
                <h3>Type</h3>
                <div className="criteriaArea">
                <Checkbox/>Loafers
                    <br></br>
                    <Checkbox/>Sneakers
                </div>
            </div>
            <button type="submit" className="filterBtn">Apply</button>
        </div>
    )
}

export default Filter

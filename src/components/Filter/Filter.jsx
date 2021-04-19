import React ,{useState} from 'react'
import "./Filter.css"
import ColourFilter from "./ColourFilter/ColourFilter"
import {FilterIcon,ArrowCircleRightIcon} from "react-line-awesome"

const Filter = () => {
    const [filterOpen,setFilterOpen]=useState(false);
    const Checkbox = props => (
        <input type="checkbox" {...props} />
      )

      const openFilter=()=>{
        setFilterOpen(filterOpen=>!filterOpen)
        if(filterOpen)
        document.getElementById("desk").style.display="block";
        else
        document.getElementById("desk").style.display="none";
      }

    return (
        <div className="leftArea">
        <div className="mobileFilter" onClick={openFilter}>
                <ArrowCircleRightIcon/>Filters
            </div>
        <div className="deskFilter" id="desk">
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
        </div>
    )
}

export default Filter

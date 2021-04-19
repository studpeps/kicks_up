import React, { useState } from 'react'
import "./NavBar.css"
import {UserIcon} from "react-line-awesome"

export default function NavBar(){
    const [openSidebar,setOpenSidebar]=useState(false);
    const hamburgerClass = 'hamburger hamburger-spin';
    return (
        <div>
            <nav className="navbar">
                    <div className="logo"></div>
                    <div className="navHeads">
                        <a href="/home">Home</a>
                        <a href="/journey">The Journey</a>
                        <a href="/team">Team</a>
                        <a href="/store">Store</a>
                        <a href="/contact">Contact</a>
                    </div>
                <div className="profile">
                       <UserIcon style={{marginRight:"10px",fontSize:"30px"}} />
                        <h3 classname="profile_name">Stuti</h3>
                </div>
            </nav>
        </div>
    )
}

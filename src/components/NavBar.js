import React from "react"
import myLogo from "../Logo.png"
//React font Imports after INSTALLING
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="Logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
                </li><li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
                </li><li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
                </li>
            </ul>
            </div>
    </div>
        </nav>
    )
}

export default NavBar

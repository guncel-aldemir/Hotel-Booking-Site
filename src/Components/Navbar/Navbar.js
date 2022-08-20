import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Icons/LogoIcon/logo.svg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <img src={Logo} alt=""></img>
          <span className="logo">Mare Nostrum</span>
        </Link>
            
        </div>
    </div>
  )
};

export default Navbar;


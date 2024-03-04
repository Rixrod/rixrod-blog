import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FcWiFiLogo } from "react-icons/fc";



const Header = () => {
 
  return (
    <div>
     

      <header className="header">
        <div class="menu-icon" onclick="openSidebar()">
          <span>info@trendinggishgh.com || 02496325789</span>
        </div>
        <div className="header-left">
          <span className="icon">
            <FcWiFiLogo />
          </span>
        </div>
        <div className="header-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </header>
      
      <div className="header1">
        <Link to="/about-us">
          <li>
            <p>NEWS</p>
          </li>
        </Link>
        <Link to="/about-us">
          <li>
            <p>BUSINESS</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>HEALTH</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>SCIENCE</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>TECHNOLOGY</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>SPORTS</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>LIFESTYLE</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>ENTERTAINMENT</p>
          </li>
        </Link>

        <Link to="/about-us">
          <li>
            <p>POLITICS</p>
          </li>
        </Link>
      </div> 
      {/* </header> */}
    </div>
  );
};

export default Header;

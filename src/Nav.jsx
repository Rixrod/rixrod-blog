import React from 'react'
import { FcWiFiLogo } from "react-icons/fc";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="navbar-one flex ">
        <div className="left flex ">
          <div className="email">
            <span>info@trendinggishgh.com || 02496325789</span>
          </div>

          <div className="header-left">
            <span className="icon">
              <FcWiFiLogo />
            </span>
          </div>
        </div>
        <div className="right flex ">
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
      </nav>

      <nav className="navbar-second  flex">
        <div className="logo">
          <h1>brand</h1>
        </div>
        <ul className="flex">
          <Link to="/about-us">
            <li>
              <p>NEWS</p>
            
            </li>
          </Link>
          <Link to="/about-us">
            <li><p>BUSINESS</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>HEALTH</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>SCIENCE</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>TECHNOLOGY</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>SPORTS</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>LIFESTYLE</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>ENTERTAINMEN</p></li>
          </Link>

          <Link to="/about-us">
            <li><p>POLITICS</p></li>
          </Link>
        </ul>
      </nav>

      {/* <section>

      </section> */}
    </div>
  );
}

export default Nav
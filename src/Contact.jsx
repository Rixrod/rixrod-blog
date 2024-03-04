import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BiLogoWhatsapp } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FcWiFiLogo } from "react-icons/fc";
import { PiTelegramLogoFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { BookOpenIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav className="navbar-one  ">
        <div className="left  ">
          <span>info@trendinggishgh.com || 02496325789</span>
        </div>

        <div className="header-left">
          <span className="icon">
            <FcWiFiLogo />
          </span>
        </div>

        <div className="right  ">
          {(toggleMenu || screenWidth > 600) && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
        <button onClick={toggleNav} className="btn">
          <IoMenu />
        </button>
      </nav>

      <nav className="navbar-second  f">
        <ul className="">
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
        </ul>
      </nav>

      {/* </div> */}
      <div>
        {/* <h1>Contact</h1> */}
        <div className="container">
          <main className="row">
            {/* <!--  *******   Left Section (Column) Starts   *******  --> */}

            <section class="col left">
              {/* <!--  *******   Title Starts   *******  --> */}

              <div className="contactTitle">
                <h2>CONTACT US</h2>
              </div>

              <div className="contactInfo">
                <div className="iconGroup1">
                  <FcWiFiLogo className="icon2" />

                  <div className="details1">
                    <h4>Trending Gist Ghana</h4>
                  </div>
                </div>
              </div>

              <br />

              <div className="contactInfo">
                <div className="iconGroup">
                  <div className="icon">
                    <BiLogoWhatsapp />
                  </div>
                  <div className="details">
                    <h5>02496325789</h5>
                  </div>
                </div>

                <div className="iconGroup">
                  <div className="icon">
                    <AiOutlineMail className="" />
                  </div>
                  <div className="details">
                    {/* <span>Email</span> */}
                    <span>info@trendinggishgh.com </span>
                  </div>
                </div>

                <div className="iconGroup">
                  <div className="icon">
                    <BiLogoWhatsapp />
                  </div>
                  <div className="details">
                    <span>Whatsapp</span>
                    {/* <span>02496325789</span> */}
                  </div>
                </div>

                <div className="iconGroup">
                  <div className="icon">
                    <PiTelegramLogoFill />
                  </div>
                  <div className="details">
                    <span>Telegram Channel</span>
                    {/* <span>02496325789</span> */}
                  </div>
                </div>
              </div>
            </section>

            <section class="col right">
              {/* <!--  *******   Form Starts   *******  --> */}

              <form className="messageForm">
                <h2 className="contactTitle1">Get in touch</h2>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod. Lorem ipsum dolor sit amet, consectetur
                  adipisicing
                </h6>
                <div class="inputGroup fullWidth ">
                  <input type="text" name="" required="required" />
                  <label> Name</label>
                </div>

                <div class="inputGroup halfWidth">
                  <input type="email" name="" required="required" />
                  <label>Phone</label>
                </div>

                <div class="inputGroup halfWidth">
                  <input type="text" name="" required="required" />
                  <label>Email</label>
                </div>

                <div class="inputGroup fullWidth">
                  <textarea required="required"></textarea>
                  <label>Your message</label>
                </div>

                <div class="inputGroup fullWidth">
                  <button>Send</button>
                </div>
              </form>

              {/* <!--  *******   Form Ends   *******  --> */}
            </section>

            {/* <!--  *******   Right Section (Column) Ends   *******  --> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;

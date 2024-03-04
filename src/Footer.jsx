import React from 'react'
import { FcWiFiLogo } from "react-icons/fc";
import { PiTelegramLogoFill } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { BiLogoSnapchat } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <div className="contactInfo">
                <div className="iconGroup1">
                  <FcWiFiLogo className="icon2" />

                  <div className="details1">
                    <h4>Trending Gist Ghana</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="media-icons">
              <a href="#">
                <PiTelegramLogoFill />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
              <a href="#">
                <BiLogoSnapchat />
              </a>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div class="bottom-details border-t border-gray-300 ">
          <div class="bottom_text">
            <span class="copyright_text">
              © 2023 <a href="#">Trending Gist Ghana</a>
            </span>
            <span class="policy_terms">
              <a href="#">Powered by</a>
              <a href="#">Rixrod</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
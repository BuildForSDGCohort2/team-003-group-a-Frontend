import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import android from "../Images/google-play-badge.svg";
import apple from "../Images/app-store-badge.svg";

const Footer = () => {
  return (
    <footer className="footer__area">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__items">
                <div className="footer__logo">
                  <Link className="footer__link" to="/home">
                    <p className="footer__edu">
                      Edu<span className="footer__conet">conet</span>
                    </p>
                  </Link>
                </div>

                <p className="footer__about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br /> Quis non, fugit totam vel laboriosam vitae.
                </p>
                <div className="footer__social">
                  <IconButton>
                    <FacebookIcon className="footer__facebook" />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon className="footer__twitter" />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon className="footer__linkedin" />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon className="footer__instagram" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__items">
                <h3 className="footer__title">Useful Links</h3>
                <Link className="footer__link" to="/">
                  Home
                </Link>
                <Link className="footer__link" to="/aboutus">
                  About Us
                </Link>
                <Link className="footer__link" to="/teacher">
                  Teacher
                </Link>
                <Link className="footer__link" to="/parent">
                  Parent
                </Link>
                <Link className="footer__link" to="/student">
                  Student
                </Link>
                <Link className="footer__link" to="/blog">
                  Blog
                </Link>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__items">
                <h3 className="footer__title">Product Help</h3>
                <Link className="footer__link" to="/faq">
                  FAQ
                </Link>
                <Link className="footer__link" to="/privacy">
                  Privacy Policy
                </Link>
                <Link className="footer__link" to="/support">
                  Support
                </Link>
                <Link className="footer__link" to="/terms">
                  Terms & Conditions
                </Link>
                <Link className="footer__link" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__items">
                <div className="footer__social"></div>
                <h3 className="footer__title">Download</h3>
                <div className="footer__button">
                  <img className="footer__store" src={android} alt="android" />
                  <img className="footer__store" src={apple} alt="apple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__copyright">
                <div className="footer__copytext">
                  &copy; Copyrights {new Date().getFullYear()} Educonet All
                  rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

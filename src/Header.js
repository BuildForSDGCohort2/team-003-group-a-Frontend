import React from "react";
import "./Header.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__navContact">
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <Typography>+23480 640 5577</Typography>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <Typography>info@educonet.com</Typography>
        </div>
        <div className="header__navSocial">
          <div className="header__facebook">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </div>
          <div className="header__twitter">
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </div>
          <div className="header__linkedin">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </div>
          <div className="header__instagram">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="header__main"></div>
    </div>
  );
};

export default Header;

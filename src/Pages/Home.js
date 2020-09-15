import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";

const Home = () => {
  function handleClick() {
    console.log("clicked me");
  }
  return (
    <div className="hero__image">
      <div className="hero__text">
        <h1>
          Education is the <span>key to Success</span>
        </h1>
        <p>We make sure you show the right path</p>
        <Button onClick={handleClick}>Take A Tour</Button>
      </div>
    </div>
  );
};

export default Home;

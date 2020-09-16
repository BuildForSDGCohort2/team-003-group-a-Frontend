import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Solution from "../Solution";

const Home = () => {
  function handleClick() {
    console.log("clicked me");
  }
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <div className="home__image" />

          <div className="home__content">
            <h1>
              Education is the <span>key to Success</span>
            </h1>
            <p>We make sure you show the right path</p>
            <Button onClick={handleClick}>Take A Tour</Button>
          </div>
        </div>
        <Solution />
      </div>
    </div>
    // <div className="home">
    //   <div className="home__image">
    //     <div className="home__text">
    //       <h1>
    //         Education is the <span>key to Success</span>
    //       </h1>
    //       <p>We make sure you show the right path</p>
    //       <Button onClick={handleClick}>Take A Tour</Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;

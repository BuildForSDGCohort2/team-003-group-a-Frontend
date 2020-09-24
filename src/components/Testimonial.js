import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials] = useState([
    {
      avatar: "https://i.ibb.co/3d7tn6G/ben-parker.jpg",
      name: "Jim Forris",
      title: "Web Designer",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
    {
      avatar: "https://i.ibb.co/8srDCy9/michael-dam.jpg",
      name: "Amanda Kors",
      title: "Web Designer",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
    {
      avatar: "https://i.ibb.co/Y08MKWk/nicolas-horn.jpg",
      name: "Benjamin Brighton",
      title: "Web Designer",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
  ]);

  return (
    <div className="review">
      <div className="review__container">
        <h1>
          Our Happy client <span>What they say about us</span>
        </h1>
      </div>
      <div className="review__card">
        <div className="review__layer">
          {testimonials.map(({ avatar, name, title, message }) => {
            return (
              <div className="review__content">
                <blockquote>
                  <p>{message}</p>
                </blockquote>

                <div className="review__thumbnail">
                  <Avatar className="review__image" src={avatar} alt="happy" />
                  <div className="review__details">
                    <h4> {name}</h4>

                    <span>{title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

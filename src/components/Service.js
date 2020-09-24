import React, { useState } from "react";
import "./Service.css";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Service = () => {
  const [services] = useState([
    {
      icon: <FaChalkboardTeacher />,
      title: "Professional Teachers",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
    {
      icon: <SiGoogleclassroom />,
      title: "Stay Connected",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
    {
      icon: <FaGraduationCap />,
      title: "Join the Achievers",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
  ]);
  return (
    <section className="services">
      <div className="services__center">
        {services.map(({ icon, title, info, index }) => {
          return (
            <article key={index} className="services__content">
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

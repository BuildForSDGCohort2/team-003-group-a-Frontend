import React, { useState } from "react";
import "./Service.css";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";

const Service = () => {
  const [services, setService] = useState([
    {
      icon: <FaChalkboardTeacher />,
      title: "Professional Teachers",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates rerum alias exercitationem dignissimos nihil doloribus ullam quo deleniti nemo odio consequatur eius reprehenderit libero accusamus ad et, omnis animi!",
    },
    {
      icon: <FaLaptopCode />,
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
        {services.map((service, index) => {
          return (
            <article key={index} className="services__content">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

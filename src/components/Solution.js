import React from "react";
import Service from "./Service";
import "./Solution.css";

const Solution = () => {
  return (
    <div className="solution">
      <div className="solution__container">
        <h3 className="solution__header">
          We provide <span>Educational </span> Solutions
        </h3>
        <hr className="solution__single" />
        <span className="solution__divider"></span>
        <hr className="solution__double" />
        <p className="solution__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          exercitationem incidunt repudiandae ipsa sed, autem neque eligendi
          <br />
          ab at, culpa nobis et esse! Ducimus obcaecati quae quas fuga numquam
          saepe!
        </p>
      </div>
      <div className="solution__rows">
        <Service />
      </div>
    </div>
  );
};

export default Solution;

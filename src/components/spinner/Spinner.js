import React from "react";

import spinner from "../../assets/spinner.gif";
import "./spinner.style.css";

const Spinner = () => {
  return (
    <div className="spinner-box">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;

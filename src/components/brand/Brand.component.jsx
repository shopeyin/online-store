import React from "react";
import "./brand.style.scss";
import ic from "../../img/ic.png";
import ic1 from "../../img/ic1.png";
import ic2 from "../../img/ic2.png";
import ic3 from "../../img/ic3.png";
const Brand = () => {
  return (
    <aside className="brand">
      <figure className="images">
        <img src={ic} alt="Photo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic1} alt="Photo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic2} alt="Photo" />
      </figure>
      <figure className="images">
        {" "}
        <img src={ic3} alt="Photo" />
      </figure>
    </aside>
  );
};

export default Brand;

import React from "react";
import "./trendyImages.style.scss";
import photo1 from "../../img/photo1.jpg";
import photo3 from "../../img/photo3.jpg";
import photo5 from "../../img/photo5.jpg";
import photo6 from "../../img/photo6.jpg";
const TrendyImages = () => {
  return (
    <section className="trendy-images">
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo1})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>

      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo3})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo5})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo6})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo6})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo3})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo5})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
      <figure>
        {" "}
        <div
          className="images"
          style={{
            backgroundImage: `url(${photo1})`,
          }}
        ></div>
        <div className="btn-container">
          <button className="btn">ADD TO CART</button>
        </div>  
        <div className="images-footer">
          <span className="name"> Puma </span>
          <span className="price"> $100 </span>
        </div>
      </figure>
    </section>
  );
};

export default TrendyImages;

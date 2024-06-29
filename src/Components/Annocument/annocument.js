import React from "react";
import "./style.css";

const Annocument = () => {
  return (
    <>
      <section className="annocument background">
        <div className="container flex justify-between">
          <div className="img mystyle">
            <img src="./images/banner-1.png" width="100%" height="100%" />
          </div>
          <div className="img mystyle1">
            <img src="./images/banner-2.png" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;

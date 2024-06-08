import React from "react";
import Sdata from "./Sdata.js";

const SlideCard = () => {
  return (
    <>
      {Sdata.map((value, index) => {
        return (
          <div className="box flex top">
            <div className="left">
              <h1>{value.title}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SlideCard;

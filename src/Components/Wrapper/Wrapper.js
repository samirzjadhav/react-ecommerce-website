import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaIdCard } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: (
        <i>
          <TbTruckDelivery size={30} />
        </i>
      ),
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: (
        <i>
          <FaIdCard size={30} />
        </i>
      ),
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: (
        <i>
          <MdOutlineSecurity size={30} />
        </i>
      ),
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: (
        <i>
          <FaHeadset size={30} />
        </i>
      ),
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle flex justify-center items-center">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

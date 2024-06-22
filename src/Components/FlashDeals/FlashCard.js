import React from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i>
          <FaArrowRightLong />
        </i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i>
          <FaArrowLeft />
        </i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i onClick={increment}>
                      {" "}
                      <FaRegHeart />
                    </i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate flex">
                    <IoMdStar fill="#ffcd4e" size={20} />
                    <IoMdStar fill="#ffcd4e" size={20} />
                    <IoMdStar fill="#ffcd4e" size={20} />
                    <IoMdStar fill="#ffcd4e" size={20} />
                    <IoMdStar fill="#ffcd4e" size={20} />
                  </div>
                  <div className="price flex justify-between">
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3 
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i>
                        <FaPlus />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;

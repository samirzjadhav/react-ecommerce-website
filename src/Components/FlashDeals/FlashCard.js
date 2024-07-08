import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaPlus, FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
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
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productItems.map((productItem, index) => (
        <div className="box" key={index}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">{productItem.discount}% Off</span>
              <img src={productItem.cover} alt={productItem.name} />
              <div className="product-like">
                <label>{count}</label>
                <i onClick={increment}>
                  <FaRegHeart />
                </i>
              </div>
            </div>
            <div className="product-details">
              <h3>{productItem.name}</h3>
              <div className="rate flex">
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
              </div>
              <div className="price flex justify-between">
                <h4>${productItem.price}.00</h4>
                <button onClick={() => addToCart(productItem)}>
                  <i>
                    <FaPlus />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FlashCard;

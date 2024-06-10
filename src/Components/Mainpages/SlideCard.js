// import React from "react";
// import Sdata from "./Sdata";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SlideCard = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     appendDots: (dots) => {
//       return <ul style={{ margin: "0px" }}>{dots}</ul>;
//     },
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         {Sdata.map((value, index) => {
//           return (
//             <div className="box flex top" key={index}>
//               <div className="left">
//                 <h1>{value.title}</h1>
//                 <p>{value.desc}</p>
//                 <button className="btn-primary">Visit Collections</button>
//               </div>
//               <div className="right">
//                 <img src={value.cover} alt="" />
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </>
//   );
// };

// export default SlideCard;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

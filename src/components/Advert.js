

//ad


import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ad = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Slide duration in milliseconds
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1,
    autoplay: true, // Auto play slides
    autoplaySpeed: 2000, // Time between slides in milliseconds
  };

  return (
    <Slider {...settings}>
      {/* Your ad components */}
      <div>
        <img src="ad1.jpg" alt="Ad 1" />
      </div>
      <div>
        <img src="ad2.jpg" alt="Ad 2" />
      </div>
      <div>
        <img src="ad3.jpg" alt="Ad 3" />
      </div>
      {/* Add more ad components */}
    </Slider>
  );
};

export default Ad;
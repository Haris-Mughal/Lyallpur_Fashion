import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/_Categories.scss"; // Create a CSS file for your styles

const CircularSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="categories">
        <div className="left-section">
          <h1>Home</h1>
        </div>
        <div className="circular-slider-container">
          <Slider {...settings}>
            <div className="circle-image">
              <img src="https://placekitten.com/800/400" alt="Slide 1" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/401" alt="Slide 2" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/402" alt="Slide 3" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/400" alt="Slide 1" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/401" alt="Slide 2" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/402" alt="Slide 3" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/400" alt="Slide 1" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/401" alt="Slide 2" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/402" alt="Slide 3" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CircularSlider;

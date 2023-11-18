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
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 5,
      //   },
      // },
      // {
      //   breakpoint: 1366,
      //   settings: {
      //     slidesToShow: 4,
      //   },
      // },
      {
        breakpoint: 1280, // another small laptop breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="categories">
        <div className="left-section">
          <p>Home</p>
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
              <img src="https://placekitten.com/800/400" alt="Slide 4" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/401" alt="Slide 5" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/402" alt="Slide 6" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/400" alt="Slide 7" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/401" alt="Slide 8" />
            </div>
            <div className="circle-image">
              <img src="https://placekitten.com/800/402" alt="Slide 9" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CircularSlider;

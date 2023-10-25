import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/_SimpleSlider.scss"; // Create a CSS file for your styles

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000,
    };
    return (
      <div className="slider-container mt-5 pt-5 mb-5">
        <Slider {...settings}>
          <div>
            <img src="https://placekitten.com/800/400" alt="Slide 1" />
          </div>
          <div>
            <img src="https://placekitten.com/800/401" alt="Slide 2" />
          </div>
          <div>
            <img src="https://placekitten.com/800/402" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  }
}

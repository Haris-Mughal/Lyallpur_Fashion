import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/_SimpleSlider.scss"; // Create a CSS file for your styles

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    appendDots: (dots) => (
      <div style={{ bottom: "10px", position: "absolute", width: "100%", textAlign: "center" }}>
        <ul style={{ margin: "0", padding: "0", display: "inline-block" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
      className="custom-dot"
        style={{
          width: "10px",
          height: "10px",
          margin: "0 5px",
          background: i === settings.currentSlide ? "white" : "rgba(169, 169, 169, 0.5)",
          borderRadius: "50%",
          transition: "background-color 0.3s",
        }}
      />
    ),
    beforeChange: (current, next) => {
      settings.currentSlide = next;
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://pk.sapphireonline.pk/cdn/shop/files/US-6-web-banners.jpg?v=1699062104&width=1500" alt="Slide 1" />
        </div>
        <div>
          <img src="https://image.useinsider.com/sapphireonline/defaultImageLibrary/HOME-web-banners-1699256557.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://pk.sapphireonline.pk/cdn/shop/files/west-3-web-banners-copy.webp?v=1698040465&width=1400" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;

import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <hr />
        <Slider {...settings}>
        <div >
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502263_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-2000</p>
          </div>
          <div>
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502263_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-2311</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502263_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-4582</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502263_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-6854</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511947_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-5824</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511947_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-3582</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511947_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-2587</p>
          </div>
          <div>

            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511947_sd.jpg;maxHeight=272;maxWidth=400" alt="img" />
            <p>Hp-pavillion-3698</p>
          </div>
        </Slider>
      </div>
    );
  }
}
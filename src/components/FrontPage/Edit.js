import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const OurFeatures = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);



  const items = sliderData.map((slider) => (
    <div key={slider._id}>
      <div className="benefit-opt-left element-center">
        <div className="benefit-single benefit-one">
          <i>
            <img src={slider.sliderImg} alt="no images" />
          </i>
          <h4 className="heading-4">{slider.sliderTitle}</h4>
          <p>{slider.sliderDesc}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="benefit-area de-padding pos-rel">
        <img
          src="assets/img/shape/stars.png"
          alt="no images"
          className="benefit-star"
        />
        <div className="container">
          <div className="benefit-wpr grid-2">
            <div className="benefit-left">
              <div className="benefit-opt grid-2">
                <AliceCarousel
                  mouseTracking
                  items={items}
                 
                  autoPlay
                  infinite
                  autoPlayInterval={3000}
                  disableButtonsControls
                  className="alice-carousel"
                />
              </div>
            </div>
            <div className="benefit-right pl-60">
              <span className="hero-sub-title text-grad mb-10">
                OUR FEATURES
              </span>
              <h2 className="heading-regular mb-30">
                Best performance and awesome features
              </h2>
              <p className="mb-40">
                canes fruitcake carrot cake cake macaroon cake. Marzipan cake
                jelly tart candy lollipop. pie macaroon topping liquoric
                Lollipop dragée croissant muffin powder candy canes
              </p>
              <ul className="why-list">
                <li>
                  <i className="fa-solid fa-check" />
                  Realtime Best Data Solutions
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Project Initialization
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Vendor management
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Market Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;

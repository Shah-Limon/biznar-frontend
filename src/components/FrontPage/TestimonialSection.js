import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TestimonialSection = () => {
  const [title, setTitle] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials/`)
      .then((res) => res.json())
      .then((info) => setTestimonials(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <>
      <div className="review-area de-padding pos-rel">
        <span className="review-wavy" />
        <img
          src="assets/img/shape/shape-1.png"
          className="review-shape-1"
          alt="no image"
        />
        <div className="container">
          {title.map((e) => (
            <div className="row">
              <div className="col-lg-8">
                <div className="review-title mb-40">
                  <span className="hero-sub-title text-grad">
                    {e.titleTopText}
                  </span>
                  <h2 className="heading-regular">
                    {e.titleOne}
                    <br></br>
                    {e.titleTwo}
                  </h2>
                  <div className="title-devider" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container container-stage pos-rel">
          <img
            src="assets/img/bg/bg-review-1.png"
            alt="no image"
            className="review-shape round-move"
          />
          <div className="row">
            <div className="col-xl-12">
              <div className="review-wpr review-sldr swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {testimonials.map((e) => (
                    <div className="swiper-slide">
                      <div className="review-single">
                        <div className="qoute-icon">
                          <img
                            src="/assets/img/icon/icon-quote.png"
                            alt="no images"
                          />
                        </div>
                        <p className="review-text">
                        {e.desc}
                        </p>
                        <div className="review-bottom">
                          <div className="review-bio">
                            <h4 className="heading-4">{e.personName}</h4>
                            <span>{e.personTitle}</span>
                          </div>
                          <div className="review-bio-pic">
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={e.personImg}
                              alt="no images"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Pagination */}
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

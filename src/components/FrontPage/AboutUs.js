import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  return (
    <>
      <div className="about-area-2 de-padding pos-rel">
        <img
          src="assets/img/shape/shape-15.png"
          className="about-shape-15"
          alt="no image"
        />
        <div className="container">
          {about.map((e) => (
            <div className="about-wpr grid-2">
              <div className="about-left-2 pos-rel pl-50">
                <div className="about-pos-2">
                  <img
                    src="assets/img/bg/bg-about.jpg"
                    className="bg-about"
                    alt="no images"
                  />
                </div>
                <div className="about-left-2-pic grid-2">
                  <div className="about-left-2-1 text-right">
                    <img src={e.img} className="mb-30" alt="no images" />
                    <img src={e.img} alt="no images" />
                  </div>
                  <div className="about-left-2-2">
                    <img src={e.img} className="mb-30" alt="no images" />
                    <img src={e.img} alt="no image" />
                  </div>
                </div>
              </div>
              <div className="about-right-2 pl-60">
                <span className="hero-sub-title text-grad mb-20">
                  {e.topTitle}
                </span>
                <h2 className="heading-1">{e.title}</h2>
                <p>
                  {about.map((AboutData, index) => (
                    <div key={index}>
                      {AboutData.subText
                        .split(". ")
                        .map((sentence, sentenceIndex, sentencesArray) => (
                          <React.Fragment key={sentenceIndex}>
                            {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                              <></>
                            )}{" "}
                            <p>{sentence}</p>
                          </React.Fragment>
                        ))}
                    </div>
                  ))}
                </p>
                <div className="about-2-opt grid-2">
                  <div className="about-2-opt-single">
                    <i className="ti-hand-point-right" />
                    <Link to={`${e.btnUrl}`}>
                      <h4 className="heading-4">{e.btnText}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

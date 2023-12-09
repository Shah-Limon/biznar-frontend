import React, { useEffect, useState } from "react";

const OurFeatures = () => {
  const [ourFeatures, setOurFeatures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/speciality`)
      .then((res) => res.json())
      .then((info) => setOurFeatures(info));
  }, []);
  return (
    <>
      <div className="benefit-area de-padding pos-rel">
        <img
          src="assets/img/shape/stars.png"
          alt="no image"
          className="benefit-star"
        />
        <div className="container">
          {ourFeatures.map((e) => (
            <div className="benefit-wpr grid-2">
              <div className="benefit-left">
                <div className="benefit-opt grid-2">
                  <div className="benefit-opt-left element-center">
                    <div className="benefit-single benefit-one">
                      <i>
                        <img
                          src={e.cardOneImg}
                          alt="no images"
                        />
                      </i>
                      <h4 className="heading-4">{e.cardTitleOne}</h4>
                      <p>
                       {e.cardDescriptionOne}
                      </p>
                    </div>
                  </div>
                  <div className="benefit-opt-right">
                    <div className="benefit-wrap">
                      <div className="benefit-single benefit-two mb-30">
                        <i>
                          <img
                          src={e.cardTwoImg}
                            alt="no image"
                          />
                        </i>
                        <h4 className="heading-4 mb-0">{e.cardTitleTwo}</h4>
                        <p>
                        {e.cardDescriptionTwo}
                        </p>
                      </div>
                      <div className="benefit-single benefit-two">
                        <i>
                          <img
                           src={e.cardThreeImg}
                            alt="no image"
                          />
                        </i>
                        <h4 className="heading-4 mb-0">{e.cardTitleThree}</h4>
                        <p>
                        {e.cardDescriptionThree}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="benefit-right pl-60">
                <span className="hero-sub-title text-grad mb-10">
                  {e.headingTitleTop}
                </span>
                <h2 className="heading-regular mb-30">{e.headingTitleOne}</h2>
                <p className="mb-40">{e.subText}</p>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default OurFeatures;

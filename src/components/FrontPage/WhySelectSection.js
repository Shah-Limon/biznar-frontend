import React, { useEffect, useState } from "react";

const WhySelectSection = () => {
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => setChoose(info));
  }, []);
  return (
    <>
      <div className="why-area-2 de-padding">
        <div className="container">
          <div className="why-wpr-2">
            {choose.map((e) => (
              <div className="row">
                <div className="col-xl-7">
                  <div className="why-left-2 pr-60">
                    <div className="why-left-up mb-40">
                      <h1-6>
                        <span class="badge btn-gradient"> {e.whyToptext}</span>
                      </h1-6>

                      <h2 className="heading-1">{e.bannerHeadingText1}</h2>

                      <p className="mb-0">{e.bannerDescription}</p>
                    </div>

                    <div className="why-option-2 grid-2">
                      <div className="why-option-single-2">
                        <img
                          src={e.cardImgOne}
                          className="why-wavy-line"
                          alt="no imagse"
                        />
                        <span className="why-circle-2" />
                        <div className="why-option-up-2">
                          <h5 className="heading-5  mb-0">{e.cardTitleOne}</h5>
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="why-option-bottom-2">
                          <p className="mb-0">{e.cardDescOne}</p>
                        </div>
                      </div>
                      <div className="why-option-single-2">
                        <img
                          src={e.cardImgTwo}
                          className="why-wavy-line"
                          alt="no imaged"
                        />
                        <span className="why-circle-2" />
                        <div className="why-option-up-2">
                          <h5 className="heading-5  mb-0">{e.cardTitleTwo}</h5>
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="why-option-bottom-2">
                          <p className="mb-0">{e.cardDescTwo}</p>
                        </div>
                      </div>
                      <div className="why-option-single-2">
                        <img
                          src={e.cardImgThree}
                          className="why-wavy-line"
                          alt="no image"
                        />
                        <span className="why-circle-2" />
                        <div className="why-option-up-2">
                          <h5 className="heading-5  mb-0">
                            {e.cardTitleThree}
                          </h5>
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="why-option-bottom-2">
                          <p className="mb-0">{e.cardDescThree}</p>
                        </div>
                      </div>
                      <div className="why-option-single-2">
                        <img
                          style={{ width: "100px", marginBottom: "100px" }}
                          src={e.cardImgFour}
                          className="why-wavy-line"
                          alt="no images"
                        />
                        <span className="why-circle-2" />
                        <div className="why-option-up-2">
                          <h5 className="heading-5  mb-0">{e.cardTitleFour}</h5>
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="why-option-bottom-2">
                          <p className="mb-0">{e.cardDescFour}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="why-right-2 element-center">
                    <div className="why-right-pic-2 pos-rel">
                      <img src={e.img} className="why-pic-1" alt="no images" />
                      <img
                        src="assets/img/ui/1.png"
                        className="why-pic-2"
                        alt="no images"
                      />
                      <img
                        src="assets/img/ui/2.png"
                        className="why-pic-3"
                        alt="no images"
                      />
                      <img
                        src="assets/img/ui/3.jpg"
                        className="why-pic-4"
                        alt="no images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySelectSection;

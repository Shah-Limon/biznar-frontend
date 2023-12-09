import React from "react";

const CallToAction = () => {
  return (
    <div
      className="promo-area de-padding pos-rel bg-overlay overflow-hidden mr-300"
      style={{ backgroundImage: "url(assets/img/pictures/bg-promo.jpg)" }}
    >
      <img
        src="assets/img/shape/pattern-1.png"
        alt="no image"
        className="pattern-1"
      />
      <div className="promo-wpr promo-margin">
        <div className="row">
          <div className="col-xl-5">
            <div className="promo-left  element-center">
              <div className="pl">
                <a href="#" className="item popup-youtube play-bt">
                  <i className="ti-control-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="promo-right">
              <div className="promo-right-content">
                <h5 className="heading-5">
                  Contact Our Agent For Any kind of IT Business Help (24/7
                  Available)
                </h5>
                <span className="promo-number">+216 2257 2658</span>
                <a
                  href="contact.html"
                  className="btn-1 btn-circle btn-gradient"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

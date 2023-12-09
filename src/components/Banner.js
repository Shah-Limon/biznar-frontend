import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Banner = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info))
      .catch((error) => {
        console.error("Error fetching sliders:", error);
      });
  }, []);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;
    const auditStatus = event.target.auditStatus.value;

    const websiteCheck = {
      email,
      website,
      userMail,
      auditStatus,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/submitted-website");
      });
  };

  return (
    <>
      <div
        className="hero-area pos-rel hero-2-before hero-bg"
        style={{ backgroundImage: "url(assets/img/bg/shape-12.png)" }}
      >
        <img
          src="assets/img/shape/slider-shape-2.png"
          alt="no"
          className="hero-2-shape-1"
        />
        <img
          src="assets/img/shape/box-shape-2.png"
          alt="no"
          className="hero-2-shape-2"
        />
        <img
          src="assets/img/shape/shape-14.png"
          alt="no"
          className="hero-2-shape-3"
        />
        <div className="hero-single-2">
          <div className="container">
            <div className="row g-5">
              <div className="col-xl-5">
                <div className="hero-content element-center">
                  {banner.map((e) => (
                    <div className="hero-content-desc">
                      <span className="hero-sub-title mb-20">
                        {e.bannerToptext}
                      </span>
                      <h2 className="hero-title">{e.bannerHeadingText1}</h2>
                      <p className="mb-40">{e.bannertext}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-7">
                <div className="left-hdr-pic pos-rel text-center pl-60">
                  {/* <img
                    src="assets/img/vector/vector-2.png"
                    className="vector-2"
                    alt="no image"
                  />
                  <img
                    src="assets/img/vector/vector-3.png"
                    className="vector-3"
                    alt="no image"
                  /> */}
                  <img
                    src="assets/img/vector/vector-3.png"
                    className="vector-3"
                    alt="images"
                  />
                  <div class="row justify-content-center align-items-center gy-5">
                    <div class="col">
                      <div
                        className="subscribe-area"
                        style={{ background: "transparent" }}
                      >
                        <h2 className="hero-title text-light">Heading Text</h2>
                        <form
                          className="flex-direction"
                          onSubmit={handleAddWebsite}
                        >
                          <input
                            required
                            type="text"
                            hidden
                            name="auditStatus"
                            value="Incomplete"
                          />

                          <input
                            hidden
                            type="email"
                            className="input-style-4"
                            name="userMail"
                            value={user?.email}
                          />
                          <input
                            required
                            type="text"
                            className="input-style-4"
                            placeholder="Your Website"
                            name="website"
                          />
                          <input
                            required
                            type="email"
                            className="input-style-4"
                            placeholder="Your Email"
                            name="email"
                          />
                          <button
                            type="submit"
                            className="btn-1 btn-circle btn-sm"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row justify-content-center align-items-center gy-5">
              <div class="col">
                <div className="subscribe-area mt-120">
                  <form>
                    <input
                      type="text"
                      className="input-style-4"
                      placeholder="Enter Website..."
                    />
                    <input
                      type="text"
                      className="input-style-4"
                      placeholder="Enter Email..."
                    />
                    <button type="submit" className="btn-1 btn-circle btn-sm">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

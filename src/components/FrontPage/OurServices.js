import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/service-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="service-area-2 de-padding pos-rel">
        <img
          src="assets/img/shape/shape-17.png"
          className="service-shape-17"
          alt="no image"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              {title.map((e) => (
                <div className="site-title text-center">
                  <h1-6>
                    {e.titleTopText}{" "}
                    <span class="badge btn-gradient">{" "}New</span>
                  </h1-6>

                  <h2>{e.title}</h2>
                  <p className="mb-0">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="service-wpr-2 grid-4">
            {services.map((service) => (
              <div className="service-box-2">
                <img
                  src="assets/img/shape/shape-16.png"
                  className="service-shape-16"
                  alt="no images"
                />
                <div className="service-pic-2">
                  <img src={service.img} alt="services" />
                </div>
                <div className="service-desc-2">
                  <Link to={`/service/${service.postSlug}`}>
                    <h4 className="heading-4">{service.title}</h4>
                  </Link>
                  <Link
                    to={`/service/${service.postSlug}`}
                    className="btn-1 btn-sm btn-circle"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

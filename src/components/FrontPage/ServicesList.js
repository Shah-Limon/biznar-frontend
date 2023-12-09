import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesList = () => {
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
      <div className="feature-area-2 de-pt">
        <div className="container">
          <div className="feature-wpr-2 grid-4">
            {services.map((service) => (
              <div className="feature-box-2">
                <img
                  src="assets/img/shape/box-shape-3.png"
                  className="feature-box-shape"
                  alt="no image"
                />
                <div className="feature-pic-2">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="feature-desc-2">
                  <Link to={`/service/${service.postSlug}`}>
                    <h4 className="heading-4">{service.title}</h4>
                  </Link>

                  <Link
                    to={`/service/${service.postSlug}`}
                    className="btn-1 btn-circle btn-sm"
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

export default ServicesList;

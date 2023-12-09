import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricingTable = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
      <div
        className="price-area bg-black-2 hero-bg de-padding"
        style={{ backgroundImage: "url(assets/img/bg/shape-34.png)" }}
      >
        <div className="container">
          <div className="row">
            {title.map((e) => (
              <div className="col-xl-6 offset-xl-3">
                <div className="site-title wh text-center">
                  <h2>{e.titleOne}<br></br>{e.titleTwo}</h2>
                  <p className="mb-0">
                   {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="price-wpr grid-3">
            {packages.map((e) => (
              <div className="price-box rounded">
                <h2 className="price-value text-center">${e.price}</h2>
                <div className="price-title-box ">
                  <div className="price-icon ">
                    <i>
                      <img
                        src="assets/img/icon/price-icon.png"
                        alt="no images"
                      />
                    </i>
                    <h5 className="price-pack mb-0">{e.packageName}</h5>
                  </div>
                </div>
                <ul className="price-features">
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureOne}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureTwo}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureThree}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureFour}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureFive}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureSix}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureSeven}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureEight}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureNine}
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> {e.featureTen}
                  </li>
                </ul>
                <div className="price-bottom text-center">
                  <Link
                    to={`/package/${e._id}`}
                    className="btn-2 btn-sm btn-circle"
                  >
                    Buy Now
                    <i className="fa fa-angle-double-right" />
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

export default PricingTable;

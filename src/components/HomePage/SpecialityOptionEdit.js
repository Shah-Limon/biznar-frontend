import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const SpecialityOptionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [speciality, SetSpeciality] = useState([]);

  const handleEditSpeciality = (event) => {
    event.preventDefault();
    const headingTitleOne = event.target.headingTitleOne.value;
    const headingTitleTop = event.target.headingTitleTop.value;
    const subText = event.target.subText.value;
    const cardTitleOne = event.target.cardTitleOne.value;
    const cardDescriptionOne = event.target.cardDescriptionOne.value;
    const cardTitleTwo = event.target.cardTitleTwo.value;
    const cardDescriptionTwo = event.target.cardDescriptionTwo.value;
    const cardTitleThree = event.target.cardTitleThree.value;
    const cardDescriptionThree = event.target.cardDescriptionThree.value;
    const cardOneImg = event.target.cardOneImg.value;
    const cardTwoImg = event.target.cardTwoImg.value;
    const cardThreeImg = event.target.cardThreeImg.value;

    const updateSpeciality = {
      headingTitleOne,
      headingTitleTop,
      subText,
      cardTitleOne,
      cardDescriptionOne,
      cardTitleTwo,
      cardDescriptionTwo,
      cardTitleThree,
      cardDescriptionThree,
      cardOneImg,
      cardTwoImg,
      cardThreeImg,
    };

    const url = `http://localhost:5000/edit-speciality/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpeciality),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/speciality/${id}`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, [id]);

  return (
    <div
      className="payment-setting mb-5"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      {speciality.map((e) => (
        <form onSubmit={handleEditSpeciality}>
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Heading Title Top</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control input-style-all"
                    placeholder="Heading Title Top"
                    name="headingTitleTop"
                    defaultValue={e.headingTitleTop}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Heading Title One</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control input-style-all"
                    placeholder="Heading Title One"
                    name="headingTitleOne"
                    defaultValue={e.headingTitleOne}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">About Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control input-style-all"
                    placeholder="Your Sub Text"
                    name="subText"
                    defaultValue={e.subText}
                  />
                </div>
              </div>

              {/*card one */}
              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section One</h3>
                </div>
              </div>
              <div className="row">
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Title One</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Title One"
                          name="cardTitleOne"
                          defaultValue={e.cardTitleOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Description One</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Description One"
                          name="cardDescriptionOne"
                          defaultValue={e.cardDescriptionOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Type the Image Url</label>
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Type the Image Url"
                          name="cardOneImg"
                          defaultValue={e.cardOneImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*card two */}
              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section Two</h3>
                </div>
              </div>
              <div className="row">
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Title Two</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Title Two"
                          name="cardTitleTwo"
                          defaultValue={e.cardTitleTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Description Two</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Description Two"
                          name="cardDescriptionTwo"
                          defaultValue={e.cardDescriptionTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Type the Image Url</label>
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Type the Image Url"
                          name="cardTwoImg"
                          defaultValue={e.cardTwoImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three card */}

              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section Two</h3>
                </div>
              </div>

              <div className="row">
                {/*card three */}
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Title Three</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Title Three"
                          name="cardTitleThree"
                          defaultValue={e.cardTitleThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Card Description Three</label>
                      <div class="form-group mb-3">
                        <textarea
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Card Description Three"
                          name="cardDescriptionThree"
                          defaultValue={e.cardDescriptionThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="card" style={{ minHeight: "150px" }}>
                    <div class="card-body">
                      <label className="mt-1">Type the Image Url</label>
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          class="form-control input-style-all"
                          placeholder="Type the Image Url"
                          name="cardThreeImg"
                          defaultValue={e.cardThreeImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <button type="submit" class="action-btn">
                  <span>Update Card</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default SpecialityOptionEdit;

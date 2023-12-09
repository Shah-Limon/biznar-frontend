import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const WhyChooseEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [choose, SetChoose] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imgbbApiKey] = useState("1f8cc98e0f42a06989fb5e2589a9a8a4");

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);

  const handleWhyEdit = async (event) => {
    event.preventDefault();
    const whyToptext = event.target.whyToptext.value;
    const bannerHeadingText1 = event.target.bannerHeadingText1.value;
    const bannerDescription = event.target.bannerDescription.value;
    const cardTitleOne = event.target.cardTitleOne.value;
    const cardDescOne = event.target.cardDescOne.value;
    const cardTitleTwo = event.target.cardTitleTwo.value;
    const cardDescTwo = event.target.cardDescTwo.value;
    const cardTitleThree = event.target.cardTitleThree.value;
    const cardDescThree = event.target.cardDescThree.value;
    const cardTitleFour = event.target.cardTitleFour.value;
    const cardDescFour = event.target.cardDescFour.value;
    const cardImgOne = event.target.cardImgOne.value;
    const cardImgTwo = event.target.cardImgTwo.value;
    const cardImgThree = event.target.cardImgThree.value;
    const cardImgFour = event.target.cardImgFour.value;

  
    let img = imageFile ? imagePreview : choose[0].img;
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("key", imgbbApiKey);

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );

        img = imgbbResponse.data.data.url;
      } catch (error) {
        console.error("Image upload to imgbb failed:", error);
        return; 
      }
    }

    const chooseData = {
      img,
      whyToptext,
      bannerHeadingText1,
      bannerDescription,
      cardTitleOne,
      cardDescOne,
      cardTitleTwo,
      cardDescTwo,
      cardTitleThree, 
      cardDescThree,
      cardTitleFour,
      cardDescFour,
      cardImgOne,
      cardImgTwo,
      cardImgThree,
      cardImgFour,
    };

    const url = `http://localhost:5000/edit-why-choose/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chooseData),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form mb-15" onSubmit={handleWhyEdit}>
        {choose.map((e) => (
          <div className="container" key={e.id}>
            <div className="justify-content-center align-items-baseline">
              <div className="col-sm">
                <label className="mt-1">Upload Image</label>
                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Images"
                    style={{ maxWidth: "100px" }}
                  />
                )}
                {!imageFile && !imagePreview && e.img && (
                  <img
                    src={e.img}
                    alt="Stored Images"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>

              <div class="col-sm">
                <label className="mt-1">Why Choose Title Top Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Top Text"
                    name="whyToptext"
                    defaultValue={e.whyToptext}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Heading Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Heading Text"
                    name="bannerHeadingText1"
                    defaultValue={e.bannerHeadingText1}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Description</label>
                <div class="form-group mb-3">
                  <textarea
                    type="text"
                    class="form-control"
                    style={{ width: "100%", height: "100px" }}
                    placeholder="Enter Heading Text"
                    name="bannerDescription"
                    defaultValue={e.bannerDescription}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section One</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{ minHeight: "120px" }}>
                    <div className="card-body">
                      <label className="mt-1">Enter Card Title (One)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Title (One)"
                          name="cardTitleOne"
                          defaultValue={e.cardTitleOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">
                        Enter Card Description (One)
                      </label>
                      <div className="form-group mb-3">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Description (One)"
                          name="cardDescOne"
                          defaultValue={e.cardDescOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">Type Image Url (One)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Image Url (One)"
                          name="cardImgOne"
                          defaultValue={e.cardImgOne}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TWO */}
              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section Two</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{ minHeight: "120px" }}>
                    <div className="card-body">
                      <label className="mt-1">Enter Card Title (Two)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Title (Two)"
                          name="cardTitleTwo"
                          defaultValue={e.cardTitleTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">
                        Enter Card Description (Two)
                      </label>
                      <div className="form-group mb-3">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Description (Two)"
                          name="cardDescTwo"
                          defaultValue={e.cardDescTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">Type Image Url (Two)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Image Url (Two)"
                          name="cardImgTwo"
                          defaultValue={e.cardImgTwo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* three */}
              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section Three</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{ minHeight: "120px" }}>
                    <div className="card-body">
                      <label className="mt-1">Enter Card Title (Three)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Title (Three)"
                          name="cardTitleThree"
                          defaultValue={e.cardTitleThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">
                        Enter Card Description (Three)
                      </label>
                      <div className="form-group mb-3">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Description (Three)"
                          name="cardDescThree"
                          defaultValue={e.cardDescThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">Type Image Url (Three)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Image Url (Three)"
                          name="cardImgThree"
                          defaultValue={e.cardImgThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Four */}
              <div className="row">
                <div className="col-sm-12 text-center mb-3">
                  <h3>Card Section Four</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{ minHeight: "120px" }}>
                    <div className="card-body">
                      <label className="mt-1">Enter Card Title (Four)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Title (Four)"
                          name="cardTitleFour"
                          defaultValue={e.cardTitleFour}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">
                        Enter Card Description (Four)
                      </label>
                      <div className="form-group mb-3">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Description (Four)"
                          name="cardDescFour"
                          defaultValue={e.cardDescFour}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card mb-3">
                    <div className="card-body">
                      <label className="mt-1">Type Image Url (Four)</label>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Image Url (Four)"
                          name="cardImgFour"
                          defaultValue={e.cardImgFour}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <button type="submit" className="action-btn">
                  <span>Update Why Choose</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default WhyChooseEdit;

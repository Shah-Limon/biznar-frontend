import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [contact, setContact] = useState([]);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Message sent successfully!");
  };
  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);

  const UserContactMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    const date = event.target.date.value;
    const messageStatus = event.target.messageStatus.value;

    const contact = {
      name,
      email,
      message,
      subject,
      date,
      messageStatus,
    };

    const url = `http://localhost:5000/add-contact-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        notifySuccess();
        navigate("/message-sent-success");
      });
  };
  // Function to get the current date in yyyy-MM-dd format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div
        className="contact-area white-overlay de-padding"
        style={{ backgroundImage: "url(assets/img/dot/dots.webp)" }}
      >
        <ToastContainer />

        {contact.map((e) => (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-title text-center">
                  <h5 className="hero-sub-title text-grad-2">
                    {e.titleTopText}
                  </h5>
                  <h2 className="up-title">
                    {e.titleOne} <br></br>
                    {e.titleTwo}
                  </h2>
                  <div className="title-devider" />
                </div>
              </div>
            </div>
            <div className="contact-wpr grid-2">
              <div className="contact-left contact-home">
                <form className="contact-form" onSubmit={UserContactMessage}>
                  <input
                    type="date"
                    hidden
                    className="form-control"
                    name="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                  />
                  <input
                    hidden
                    type="text"
                    className="form-control"
                    name="messageStatus"
                    value="UnRead"
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control input-style-2"
                          id="name"
                          name="name"
                          placeholder="Your Full Name*"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          required
                          className="form-control input-style-2"
                          id="email"
                          name="email"
                          placeholder="Your Email Address*"
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                        required
                          type="text"
                          className="form-control input-style-2"
                          id="subject"
                          name="subject"
                          placeholder="Subject..."
                        />
                        <span className="alert alert-error" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <textarea
                      required
                        className="form-control input-style-2"
                        id="comment"
                        name="message"
                        placeholder="Your Message..."
                        defaultValue={""}
                      />
                      <div className="contact-sub-btn text-center">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="btn-submit btn-gradient"
                        >
                          Send Message
                          <i className="fas fa-chevron-right" />
                        </button>
                      </div>
                      {/* Alert Message */}
                      <div className="alert-notification">
                        <div id="message" className="alert-msg" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-right pos-rel">
                <img
                  src="assets/img/person/cn-2.webp"
                  className="contact-cn-1"
                  alt="noimage"
                />
                <div className="contact-up-title mb-40">
                  <div className="contact-pix">
                    <img
                      src={e.img}
                      className="contact-main-pic"
                      alt="noimage"
                    />
                  </div>
                </div>
                <div className="addr-box addr-home">
                  <div className="addr-box-single">
                    <div className="addr-icon">
                      <i className="icofont-location-arrow text-grad-2" />
                    </div>
                    <div className="addr-desc">
                      <h5>Office Address</h5>
                      <p className="mb-0">{e.address}</p>
                    </div>
                  </div>
                  <div className="addr-box-single">
                    <div className="addr-icon">
                      <i className="fa-solid fa-phone text-grad-2" />
                    </div>
                    <div className="addr-desc">
                      <h5>Phone Number</h5>
                      <p className="mb-0">{e.phone}</p>
                    </div>
                  </div>
                  <div className="addr-box-single">
                    <div className="addr-icon">
                      <i className="fa-solid fa-envelope text-grad-2" />
                    </div>
                    <div className="addr-desc">
                      <h5>Email</h5>
                      <p className="mb-0">{e.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUs;

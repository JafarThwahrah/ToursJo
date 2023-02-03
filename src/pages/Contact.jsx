import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { loginDataContext } from "../App";
import Swal from "sweetalert2";

function Contact() {
  const setUserLoginData = useContext(loginDataContext);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [tokens, setTokens] = useState(null);

  const initialValue = {
    user_name: "",
    user_email: "",
    subject: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [userId, setUserId] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formData));

    if (!loginData) {
      const error = {};
      error.is_Login = "You must login to send Your message";
      setFormErrors(error);
      return;
    }

    const data = formData;
    const axiosAuth = "Bearer " + tokens;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post(`http://localhost:8000/api/contactus/${userId}`, data)
      .then((res) => {
        Swal.fire(
          "Thanks for using our Channel",
          "We will contact you within48 Hours.",
          "success"
        );
      })
      .catch((e) => {});
  };

  const validate = (data) => {
    const errors = {};
    if (!data.user_name) {
      errors.user_name = "username field is required";
    }
    if (!data.user_email) {
      errors.user_email = "email field is required";
    }

    if (!data.subject) {
      errors.subject = "subject field is required";
    }

    if (!data.description) {
      errors.description = "description field is required";
    }

    return errors;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTokens(loginData?.data.token);
    setUserId(loginData?.data.user.id);
  }, []);

  console.log(userId);
  return (
    <div>
      <section
        class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/5606579.jpg)",
        }}>
        <div class="container">
          <div class="row slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <Link to="/">
                    Home <i class="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Contact us <i class="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 class="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb contact-section mb-4">
        <div class="container">
          <div class="row d-flex contact-info">
            <div class="col-md-3 d-flex">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="fa fa-map-marker"></span>
                </div>
                <h3 class="mb-2">Address</h3>
                <p>
                  <a href="https://goo.gl/maps/WrMBtGQ1dqtZkQAu9">
                    {" "}
                    Jordan, Amman makkah street
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="fa fa-phone"></span>
                </div>
                <h3 class="mb-2">Contact Number</h3>
                <p>
                  <a href="tel://0785351933">0785351933</a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="fa fa-paper-plane"></span>
                </div>
                <h3 class="mb-2">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">
                    jaffardawahreh2@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="fa fa-globe"></span>
                </div>
                <h3 class="mb-2">Website</h3>
                <p>
                  <a href="https://jafarthwahrah.github.io/Portfolio/">
                    Portfolio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section contact-section ftco-no-pt">
        <div class="container">
          <div class="row block-9 justify-content-md-center">
            <div class=" col-12 col-md-6 order-md-last d-flex ">
              <form onSubmit={handlesubmit} class="bg-light p-5 contact-form">
                <p style={{ color: "red" }}> {formErrors?.is_Login}</p>
                <div class="form-group">
                  <p style={{ color: "red" }}>{formErrors?.user_name}</p>
                  <input
                    onChange={handleChange}
                    name="user_name"
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <p style={{ color: "red" }}>{formErrors?.user_email}</p>
                  <input
                    onChange={handleChange}
                    name="user_email"
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <p style={{ color: "red" }}>{formErrors?.subject}</p>
                  <input
                    onChange={handleChange}
                    name="subject"
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <p style={{ color: "red" }}>{formErrors?.description}</p>
                  <textarea
                    onChange={handleChange}
                    name="description"
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

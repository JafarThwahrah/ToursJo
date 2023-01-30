import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <form action="#" class="bg-light p-5 contact-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
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

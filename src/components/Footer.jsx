import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer
        className="ftco-footer bg-bottom ftco-no-pt"
        style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md pt-5">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>
                  ToursJo is a platform form which allows Tour advisors to
                  provide their services to the tourists, by publishing trips
                  for specific destination.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate">
                    <a href="google.com">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="google.com">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="google.com">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Infromation</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      Online Enquiry
                    </a>
                  </li>
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      General Enquiries
                    </a>
                  </li>
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      Booking Conditions
                    </a>
                  </li>
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      Privacy and Policy
                    </a>
                  </li>
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="google.com" className="py-2 d-block">
                      Call Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map-marker"></span>
                      <span className="text">
                        Amman, Jordan , Almadina street
                      </span>
                    </li>
                    <li>
                      <a href="google.com">
                        <span className="icon fa fa-phone"></span>
                        <span className="text">07853155452</span>
                      </a>
                    </li>
                    <li>
                      <a href="google.com">
                        <span className="icon fa fa-paper-plane"></span>
                        <span className="text">jaffardawahreh2@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

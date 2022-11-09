import React from "react";

function About() {
  return (
    <div>
      <div class="support-company-area servic-padding fix">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="support-location-img mb-50">
                <img src="assets/img/service/support-img.jpg" alt="" />
                <div class="support-img-cap">
                  <span>Since 1992</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="right-caption">
                <div class="section-tittle section-tittle2">
                  <span>About Our Company</span>
                  <h2>
                    We are Go Trip <br />
                    Ravels Support Company
                  </h2>
                </div>
                <div class="support-caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <div class="select-suport-items">
                    <label class="single-items">
                      Lorem ipsum dolor sit amet
                      <input type="checkbox" checked="checked active" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="single-items">
                      Consectetur adipisicing sed do
                      <input type="checkbox" checked="checked active" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="single-items">
                      Eiusmod tempor incididunt
                      <input type="checkbox" checked="checked active" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="single-items">
                      Ad minim veniam, quis nostrud.
                      <input type="checkbox" checked="checked active" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="our-services place-padding">
        <div class="container">
          <div class="row d-flex justify-contnet-center">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-tour"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    8000+ Our Local
                    <br />
                    Guides
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-pay"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    100% Trusted Tour
                    <br />
                    Agency
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-experience"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    28+ Years of Travel
                    <br />
                    Experience
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="single-services text-center mb-30">
                <div class="services-ion">
                  <span class="flaticon-good"></span>
                </div>
                <div class="services-cap">
                  <h5>
                    98% Our Travelers
                    <br />
                    are Happy
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

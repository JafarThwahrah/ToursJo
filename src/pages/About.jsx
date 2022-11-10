import React from "react";
import "../styles/About.css";

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

      <div class="container111 m-5">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored">
			<i class="fa fa-thumbs-o-up"></i>
			<span class="counter">2147</span>
			<p>Happy Customers</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-group"></i>
			<span class="counter">3275</span>
			<p>Registered Members</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa  fa-shopping-cart"></i>
			<span class="counter">289</span>
			<p>Available Products</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa  fa-user"></i>
			<span class="counter">1563</span>
			<p>Saved Trees</p>
		</div>
	</div>
  </div>	
</div>

    </div>
  );
}

export default About;


  
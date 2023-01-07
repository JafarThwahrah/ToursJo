import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("http://localhost:8000/api/about")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div
        className="hero-wrap js-fullheight d-flex align-items-center"
        style={{
          backgroundImage: `url(https://www.wadirumnightluxury.com/sites/default/files/_MGL2732sss.jpg)`,
        }}>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <Link to="/">
                    Home <i class="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  About us <i class="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 class="mb-0 bread">About us</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="support-company-area servic-padding fix">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="support-location-img mb-50">
                <img
                  src="https://i.pinimg.com/originals/38/d7/d4/38d7d4dbeab8986eecf8bf4ad5db5f70.jpg"
                  alt=""
                />
                <div class="support-img-cap"></div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="right-caption">
                <div class="section-tittle section-tittle2 text-start">
                  <span>About Our Company</span>
                  <h2>Thanks for Choosing our website</h2>
                </div>
                <div class="support-caption text-start">
                  <p>
                    ToursJo is a platform form which allows Tour advisors to
                    provide their services to the tourists, by publishing trips
                    for specific destination ,after the trips is booked the
                    tourist can Rate the advisor services which will appear on
                    the website.
                  </p>
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
              <span class="counter">{data?.happyCustomers}</span>
              <p>Happy Customers</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa fa-group"></i>
              <span class="counter">{data?.allUsers}</span>
              <p>Registered Users</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <LocationOnIcon sx={{ fontSize: 75 }} color="disabled" />
              <span class="counter">{data?.publishedTours}</span>
              <p>Published Tours</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa  fa-user"></i>
              <span class="counter">{data?.advisors}</span>
              <p>Number of Advisors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

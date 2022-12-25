import React from "react";
import { Link } from "react-router-dom";
import BasicPopover from "../components/BasicPopover";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Home() {
  const [advisors, setAdvisors] = useState();
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getalladvisors")
      .then((res) => {
        console.log(res);
        setAdvisors(res.data.Advisors);

        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 500);
      })
      .catch((err) => {
        console.log(err);
      });

    (async () => {
      try {
        let response = await axios.get(
          "http://localhost:8000/api/getTestimonials"
        );
        setTestimonials(response.data.Testimonials);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="hero-wrap js-fullheight d-flex align-items-center heroImgHome"
        style={{
          backgroundImage: `url(https://cdn.theculturetrip.com/wp-content/uploads/2021/06/petra.jpg)`,
        }}>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight"
            data-scrollax-parent="">
            <div className="col-md-7">
              <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
              <p className="caps">
                Travel to the any corner of the world, without going around in
                circles
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section services-section">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
              <div class="w-100 text-start">
                <span class="subheading">Welcome to TourJo</span>
                <h2 class="mb-4">It's time to start your adventure</h2>
                <p></p>
                <p>
                  ToursJo is a platform form which allows Tour advisors to
                  provide their services to the tourists, by publishing trips
                  for specific destination ,after the trips is booked the
                  tourist can Rate the advisor services which will appear on the
                  website.
                </p>
                <p>
                  <Link to="/destination" class="btn btn-primary py-3 px-4">
                    Search Destination
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    class="services services-1 color-1 d-block img"
                    style={{ backgroundImage: "url(images/services-1.jpg)" }}>
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-paragliding"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Activities</h3>
                      <p>
                        Enjoy the best activities and hosbitality with reasoble
                        prices.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    class="services services-1 color-2 d-block img"
                    style={{ backgroundImage: "url(images/services-2.jpg)" }}>
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-route"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Tour Arrangements</h3>
                      <p>
                        Arrange your tour with your favorite tour advisors,
                        contact with us anytime if you faced any issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    class="services services-1 color-3 d-block img"
                    style={{ backgroundImage: "url(images/services-3.jpg)" }}>
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-tour-guide"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Private Guide</h3>
                      <p>
                        Keep in touch with your guide, check the route trip and
                        never hesitate to make suggestions to your advisor.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div
                    class="services services-1 color-4 d-block img"
                    style={{ backgroundImage: "url(images/services-4.jpg)" }}>
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-map"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">
                        Follow your favotite Advisors
                      </h3>
                      <p>
                        You will receive Notification once your favorite
                        advisors publish new Trips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="row justify-content-center m-2">
        <div className="album w-75 h-75 heading-section">
          <span class="subheading">Favorite Destinations</span>
          <h2 class="mb-5">MOST VISITED DESTINATIONS</h2>
          <div class=" row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <Link class="column" id="caption5" href="">
                <img
                  src="https://www.albawaba.com/sites/default/files/im/pr_new/shutterstock_47220460_aqaba_port_jordan.jpg?width=1200&enable=upscale"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <span class="text">
                  <h1>Aqaba</h1>
                </span>
              </Link>
              <Link class="column" id="caption6" href="">
                <img
                  src="https://img.freepik.com/premium-photo/path-from-evaporated-salt-dead-sea-israel_416511-6771.jpg?w=2000"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                  style={{ height: "36rem" }}
                />
                <span class="text">
                  <h1>Dead Sea</h1>
                </span>
              </Link>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <Link class="column" id="caption1" href="">
                <img
                  src="https://handluggageonly.co.uk/wp-content/uploads/2019/04/6I9A0493.jpg"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />
                <span class="text">
                  <h1>Petra</h1>
                </span>
              </Link>
              <Link class="column" id="caption2" href="">
                <img
                  src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/01/shutterstock_174061010.jpg"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                  style={{ height: "15.5rem" }}
                />
                <span class="text">
                  <h1>Jerash</h1>
                </span>
              </Link>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <Link class="column" id="caption3" href="">
                <img
                  src="https://fshoq.com/uploads/repository/travel/jordania/nebo_mountain/nebo_mountain_church.jpg"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />
                <span class="text">
                  <h1>Nebo Mountain</h1>
                </span>
              </Link>
              <Link class="column" id="caption4" href="">
                <img
                  src="https://stepintojordan.com/wp-content/uploads/2019/09/Amman-Roman-Theatre.jpg"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                  style={{ height: "37rem" }}
                />
                <span class="text">
                  <h1>Amman</h1>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-12 heading-section text-center">
              <span class="subheading">Best Rated Advisros</span>
              <h2 class="mb-4">FIND OUR BEST ADVISORS</h2>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            {advisors?.map((advisor) => {
              return (
                <div class="col-md-4 ">
                  <div class="project-wrap hotel">
                    <img
                      className="img"
                      src={require(`../images/${advisor.user_image}`)}
                      alt=""
                    />
                    <div class="text p-4">
                      <Rating
                        size="large"
                        name="size-large"
                        value={advisor.rating}
                        readOnly
                        precision={0.5}
                      />

                      {/* <span class="days">8 Days Tour</span> */}
                      <h3>
                        <BasicPopover
                          rating={advisor.rating}
                          userName={advisor.user_name}
                          userImage={advisor.user_image}
                          userID={advisor.id}
                        />
                      </h3>
                      <Typography
                        style={{
                          wordWrap: "break-word",
                          height: "5rem",
                          overflow: "scroll",
                          overflow: "hidden",
                        }}>
                        {advisor.user_sammary}
                      </Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div class="justify-content-center pb-4">
        <div class="col-md-12 heading-section text-center">
          <span class="subheading">Recent Events</span>
          <h2 class="mb-4">IMPORTANT EVENTS IN JORDAN</h2>
        </div>
      </div>
      <section
        class="ftco-section ftco-about img"
        style={{
          backgroundImage:
            "url(https://www.thenationalnews.com/resizer/z31GnOzOCP7dJ5iEaJW_L6kOM04=/arc-photo-thenational/eu-central-1-prod/public/4DY3ZIZABILE4EGCJMHS747SK4.jpg)",
          height: "35rem",
        }}>
        <div class="overlay"></div>
        <div class="container py-md-5">
          <div class="row py-md-5"></div>
        </div>
      </section>

      <section class="ftco-section ftco-about ftco-no-pt img">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-12 about-intro">
              <div class="row">
                <div class="col-md-6 d-flex align-items-stretch">
                  <div
                    class="img d-flex w-100 align-items-center justify-content-center"
                    style={{
                      backgroundImage:
                        "url(https://www.localguidesconnect.com/t5/image/serverpage/image-id/538627i07B70D03DEC16B28/image-size/large?v=v2&px=999)",
                    }}></div>
                </div>
                <div class="col-md-6 pl-md-5 py-5">
                  <div class="row justify-content-start pb-3">
                    <div class="col-md-12 heading-section">
                      {/* <span class="subheading">About Us</span> */}
                      <h2 class="mb-4 py-4">RAMADAN </h2>
                      <p class="text-start">
                        Ramadan is a joyous holy month reserved for fasting,
                        piety, and generosity. The dates of observance varies
                        according to the Islamic lunar calendar. During Ramadan,
                        alcohol is not sold, except in larger hotels. Smoking,
                        eating, and drinking in public is prohibited during the
                        hours of daylight. As a sign of respect, visitors are
                        kindly requested to refrain from these activities in
                        public during fasting hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ftco-section testimony-section bg-bottom mb-5"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/wide-angle-shot-ancient-building-with-towers-jerash-jordan_181624-17117.jpg?w=2000)",
        }}>
        {/* <div class="overlay"></div> */}
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-7 text-center heading-section heading-section-white">
              <span class="subheading" style={{ color: "#f15d30" }}>
                Testimonial
              </span>
              <h2 class="mb-4">Tourist Feedback</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-12 cards-container">
              <div class="owl-carousel owl-theme mt-5">
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card p-1">
                      <img
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <p class="star">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </p>
                    <div class="name">Denis Richie</div>
                  </div>
                </div>
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card">
                      <img
                        src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <div class="name">Lisa Sthalekar</div>
                  </div>
                </div>
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card">
                      <img
                        src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <div class="name">Elizabith Richie</div>
                  </div>
                </div>
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card">
                      <img
                        src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <div class="name">Daniel Xavier</div>
                  </div>
                </div>
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card">
                      <img
                        src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <div class="name">Emma Watson</div>
                  </div>
                </div>
                <div class="owl-item">
                  <div class="card">
                    <div class="img-card">
                      <img
                        src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                      />
                    </div>
                    <div class="testimonial mt-4 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus expedita dicta doloremque odit saepe quo natus
                      aut accusantium alias blanditiis.
                    </div>
                    <div class="name">Mohammad Imran</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

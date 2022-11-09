import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url(images/bg_5.jpg)` }}>
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center"
            data-scrollax-parent="true">
            <div className="col-md-7">
              <span className="subheading">Welcome to Pacific</span>
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
              <div class="w-100">
                <span class="subheading">Welcome to Pacific</span>
                <h2 class="mb-4">It's time to start your adventure</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <p>
                  <a href="google.com" class="btn btn-primary py-3 px-4">
                    Search Destination
                  </a>
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
                        A small river named Duden flows by their place and
                        supplies it with the necessary
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
                      <h3 class="heading mb-3">Travel Arrangements</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary
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
                        A small river named Duden flows by their place and
                        supplies it with the necessary
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
                      <h3 class="heading mb-3">Location Manager</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="album w-75 h-75 heading-section">
        <h2 class="mb-5">Best Rated Tours</h2>
        <div class=" row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-12 heading-section text-center">
              <span class="subheading">Destination</span>
              <h2 class="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-1.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">8 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-mountains"></span>Near Mountain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-2.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">10 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-3.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">7 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-4.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">8 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-5.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">10 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="project-wrap">
                <a
                  href="google.com"
                  class="img"
                  style={{ backgroundImage: "url(images/destination-6.jpg)" }}>
                  <span class="price">$550/person</span>
                </a>
                <div class="text p-4">
                  <span class="days">7 Days Tour</span>
                  <h3>
                    <a href="google.com">Banaue Rice Terraces</a>
                  </h3>
                  <p class="location">
                    <span class="fa fa-map-marker"></span> Banaue, Ifugao,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span class="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span class="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span class="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ftco-section testimony-section bg-bottom"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-7 text-center heading-section heading-section-white">
              <span class="subheading">Testimonial</span>
              <h2 class="mb-4">Tourist Feedback</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
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

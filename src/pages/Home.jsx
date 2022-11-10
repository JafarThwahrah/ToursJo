import React from "react";
import { Link } from "react-router-dom";
import BasicPopover from "../components/BasicPopover";

function Home() {
  return (
    <>
      <div
        className="hero-wrap js-fullheight d-flex align-items-center"
        style={{ backgroundImage: `url(https://cdn.theculturetrip.com/wp-content/uploads/2021/06/petra.jpg)`}}>
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
      <section class="row justify-content-center m-2">
        <div className="album w-75 h-75 heading-section">
          <h2 class="mb-5">Best Rated Destinations</h2>
          <div class=" row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <Link class="column" id="caption5" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <span class="text">
                  <h1>caption5</h1>
                </span>
              </Link>
              <Link class="column" id="caption6" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
                <span class="text">
                  <h1>caption5</h1>
                </span>
              </Link>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <Link class="column" id="caption1" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />
                <span class="text">
                  <h1>Thunder</h1>
                </span>
              </Link>
              <Link class="column" id="caption2" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <span class="text">
                  <h1>caption2</h1>
                </span>
              </Link>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <Link class="column" id="caption3" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />
                <span class="text">
                  <h1>caption3</h1>
                </span>
              </Link>
              <Link class="column" id="caption4" href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
                <span class="text">
                  <h1>caption3</h1>
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
              <h2 class="mb-4">Find our Best Advisros</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ">
              <div class="project-wrap hotel">
                <a
                  href="#"
                  class="img"
                  style={{ backgroundImage: "url(https://d2studios.net/wp-content/uploads/blog/2015/04/6-Uses-for-a-Professional-Personal-Portrait-Photograph.jpg)" }}>
                </a>
                <div class="text p-4">
                  <p class="star mb-2">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </p>
                  {/* <span class="days">8 Days Tour</span> */}
                  <h3>
                  <BasicPopover />
                  </h3>
                  <p class="location">
                    <span class=""></span> Sammary, Im Jafar From Jordan Zarqa blah blah blah
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ftco-section testimony-section bg-bottom mb-5"
        style={{ backgroundImage: "url(https://img.freepik.com/free-photo/wide-angle-shot-ancient-building-with-towers-jerash-jordan_181624-17117.jpg?w=2000)" }}>
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

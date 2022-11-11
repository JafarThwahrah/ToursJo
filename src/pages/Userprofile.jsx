import React from "react";
import { Link } from "react-router-dom";
import "../styles/Userprofile.css";
function Userprofile() {
  return (
    <div>
      <div class="layout-content m-5">
        <div class="container flex-grow-1 container-p-y">
          <div class="container-m-nx container-m-ny theme-bg-white mb-4">
            <div class="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                class="d-block ui-w-100 rounded-circle"
              />
              <div class="media-body ml-5 d-flex     flex-column">
                <div>
                  <h4 class="font-weight-bold mb-4 text-left">
                    Nellie Maxwell
                  </h4>

                  <div class="text-muted mb-4 text-left">
                    Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam.
                    Ad harum primis electram duo, porro principes ei has.
                  </div>
                </div>
                <div class="d-flex ">
                  <a href="javascript:void(0)" class="d-inline-block text-body">
                    <strong>234</strong>
                    <span class="text-muted">followers</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="d-inline-block text-body ml-3">
                    <strong>111</strong>
                    <span class="text-muted">following</span>
                  </a>
                </div>
              </div>
            </div>
            <hr class="m-0" />
          </div>

          <div class="row">
            <div class="col">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row mb-2">
                    <div class="col-md-3 text-muted">Birthday:</div>
                    <div class="col-md-9">May 3, 1995</div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-md-3 text-muted">Country:</div>
                    <div class="col-md-9">
                      <a href="javascript:void(0)" class="text-body">
                        Canada
                      </a>
                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-md-3 text-muted">Languages:</div>
                    <div class="col-md-9">
                      <a href="javascript:void(0)" class="text-body">
                        English
                      </a>
                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-md-3 text-muted">Phone:</div>
                    <div class="col-md-9">+0 (123) 456 7891</div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-md-3 text-muted">Favorite music:</div>
                    <div class="col-md-9">
                      <a href="javascript:void(0)" class="text-body">
                        Rock
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Alternative
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Electro
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Drum &amp; Bass
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Dance
                      </a>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-3 text-muted">Favorite movies:</div>
                    <div class="col-md-9">
                      <a href="javascript:void(0)" class="text-body">
                        The Green Mile
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Pulp Fiction
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Back to the Future
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        WALL·E
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Django Unchained
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        The Truman Show
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Home Alone
                      </a>
                      ,
                      <a href="javascript:void(0)" class="text-body">
                        Seven Pounds
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-center p-0">
                  <div class="row no-gutters row-bordered row-border-light">
                    <span class="d-flex col flex-column text-body py-3">
                      <div class="font-weight-bold">24</div>
                      <div class="text-muted small">Booked Tours</div>
                    </span>
                    <span class="d-flex col flex-column text-body py-3">
                      <div class="font-weight-bold">4.5/5</div>
                      <div class="text-muted small">Your Rate</div>
                    </span>
                    <span class="d-flex col flex-column text-body py-3">
                      <div class="font-weight-bold">215</div>
                      <div class="text-muted small">photos</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-top-border">
            <h3 class="mb-30">Published Tours</h3>
            <div class="progress-table-wrap">
              <div class="progress-table">
                <div class="table-head">
                  <div class="serial">Tour ID</div>
                  <div class="tourdate">Tour Date</div>
                  <div class="Destination">Destination</div>
                  <div class="touristname">Tour Route</div>
                  <div class="price">Price</div>
                  <div class="review">Edit/unpublish</div>
                </div>
                <div class="table-row">
                  <div class="serial">01</div>
                  <div class="tourdate">01</div>
                  <div class="Destination">Destination</div>
                  <div class="touristname">645032</div>

                  <div class="price">50usd</div>
                  <div class="review d-flex justify-content-center">
                    {" "}
                    <a href="{{route('Book.edit'  , $Book->id)}}">
                      <button class="btn btn-info btn-s">
                        <i class="bi bi-pencil"></i>
                      </button>
                    </a>
                    <form
                      action="{{route('Book.destroy' , $Book->id)}}"
                      method="POST">
                      {" "}
                      <button
                        class="btn btn-danger btn-s ms-2"
                        type="submit"
                        onClick="return confirm('Do you really want to delete');">
                        <i class="bi bi-trash3"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row-reverse mt-3">
              <p class="">
                <Link
                  to="/destination"
                  type="button"
                  class="btn btn-primary px-4 py-3 text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Publish New Trip
                </Link>
              </p>

              <div
                class="modal fade "
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Publish new Tour
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form action="">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-top-border">
            <h3 class="mb-30">Tours History</h3>
            <div class="progress-table-wrap">
              <div class="progress-table">
                <div class="table-head">
                  <div class="serial">Tour ID</div>
                  <div class="tourdate">Tour Date</div>
                  <div class="Destination">Destination</div>
                  <div class="touristname">Tourist Name</div>
                  <div class="price">Price</div>
                  <div class="review">review</div>
                </div>
                <div class="table-row">
                  <div class="serial">01</div>
                  <div class="tourdate">01</div>
                  <div class="Destination">Destination</div>
                  <div class="touristname">645032</div>

                  <div class="price">50usd</div>
                  <div class="review">5/5</div>
                </div>
                <div class="table-row">
                  <div class="serial">02</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f2.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-2"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">03</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f3.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-3"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">04</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f4.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-4"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">05</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f5.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-5"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">06</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f6.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-6"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">07</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f7.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-7"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="serial">08</div>
                  <div class="country">
                    {" "}
                    <img src="assets/img/elements/f8.jpg" alt="flag" />
                    Canada
                  </div>
                  <div class="visit">645032</div>
                  <div class="percentage">
                    <div class="progress">
                      <div
                        class="progress-bar color-8"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

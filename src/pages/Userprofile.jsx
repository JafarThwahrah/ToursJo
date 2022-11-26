import React from "react";
import { Link } from "react-router-dom";
import "../styles/Userprofile.css";
import { useParams } from "react-router-dom";
import "../css/style.css";
// import "../assets/css/style.css";
function Userprofile() {
  const { id } = useParams();

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
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1"></option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">
                            Date
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <div class="mb-3">
                          <label for="Price" class="form-label">
                            Price(JOD)
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="Price"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="route" class="form-label">
                            Tour Route(Map Link)
                          </label>
                          <input type="text" class="form-control" id="route" />
                        </div>

                        <div class="mb-3">
                          <label for="heroimg" class="form-label">
                            Hero image
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="heroimg"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="img1" class="form-label">
                            Image 1
                          </label>
                          <input type="text" class="form-control" id="img1" />
                        </div>
                        <div class="mb-3">
                          <label for="img2" class="form-label">
                            Image 2
                          </label>
                          <input type="text" class="form-control" id="img2" />
                        </div>
                        <div class="mb-3">
                          <label for="img3" class="form-label">
                            Image 3
                          </label>
                          <input type="text" class="form-control" id="img3" />
                        </div>
                        <div class="mb-3">
                          <label for="img4" class="form-label">
                            Image 4
                          </label>
                          <input type="text" class="form-control" id="img4" />
                        </div>

                        <div class="mb-3">
                          <label for="description" class="form-label">
                            Description
                          </label>
                          <textarea
                            class="form-control"
                            aria-label="description"></textarea>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

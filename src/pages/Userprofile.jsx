import React from "react";
import { Link } from "react-router-dom";
import "../styles/Userprofile.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import "../css/style.css";
import "../styles/style2.css";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Rating from "@mui/material/Rating";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Userprofile() {
  // const { id } = useParams();

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [openModal, setOpenModal] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [open, setOpen] = React.useState(false);
  const [tours, setTours] = useState(null);
  const [userData, setUserData] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [bookedtours, setBookedtours] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState({});
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [number, setNumber] = useState(null);
  const [route, setRoute] = useState(null);
  const [description, setDescription] = useState(null);
  const [destinations, setDestinations] = useState(null);
  const [heroImg, setHeroImg] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [tourJoin, setTourJoin] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginData) {
      navigate(`/login`);
    }
  }, [loginData]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("destination_id", selectedDestination);
    data.append("advisor_id", userData[0].id);
    data.append("tour_price", price);
    data.append("advisor_contact_number", number);
    data.append("tour_route", route);
    data.append("tour_description", description);
    data.append("tour_date", date);
    data.append("hero_img", heroImg);
    data.append("img_1", img1);
    data.append("img_2", img2);
    data.append("img_3", img3);
    data.append("img_4", img4);

    const axiosAuth = "Bearer " + tokens;
    // const options = {
    //   method: "POST",
    //   url: "http://localhost:8000/api/tours",
    //   headers: {
    //     Authorization: axiosAuth,
    //     "content-type": "application/json",
    //   },data: '{"title":"Spaghetti Carbonara","servings":2,"ingredients":["1 lb spaghetti","3.5 oz pancetta","2 Tbsps olive oil","1  egg","0.5 cup parmesan cheese"],"instructions":"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "}'

    // };
    // console.log(tokens);

    // axios
    //   .request(options, data)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
    //   console.log(response);
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post("http://localhost:8000/api/tours", data)
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });

    // window.location.reload(false);
    // navigate(`/`);
  };
  const handleClose = (event) => {
    setOpen(false);
  };
  useEffect(() => {
    setUserData([loginData?.data.user]);
    setTokens(loginData?.data.token);
    axios
      .get("http://localhost:8000/api/destinations")
      .then((res) => {
        setDestinations(res.data.destinations);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userData) {
      axios
        .get(`http://localhost:8000/api/gettours/${userData[0].id}`)
        .then((res) => {
          setTours(res.data.toursPerUser);
          setTourJoin(res.data.ToursJoinDes);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          `http://localhost:8000/api/getbookedtour/${userData[0].user_role}/${userData[0].id}`
        )
        .then((res) => {
          setBookedtours(res.data.bookedtours);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);

  function handleLogout() {
    const axiosAuth = "Bearer " + tokens;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.clear();
    setLoginData(null);
  }

  for (let i = 0; i < tours?.length; i++) {
    tourJoin[i].id = tours[i].id;
  }
  // console.log(loginData.data.user.user_role);
  // console.log(userData[0].id);
  // console.log(price);
  // console.log(number);
  // console.log(route);
  console.log(description);

  return (
    <div>
      <section
        class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome userProfileIMG"
        style={{
          backgroundImage:
            "url(https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg)",
        }}>
        <div class="container">
          <div class="row slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <h1 class="mb-0 bread">Profile</h1>
            </div>
          </div>
        </div>
      </section>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Tour Published Successfully!
        </Alert>
      </Snackbar>
      <div class="layout-content m-5">
        <div class="container flex-grow-1 container-p-y">
          {userData?.map((data) => {
            return (
              <>
                <div class="container-m-nx container-m-ny theme-bg-white mb-4">
                  <div class="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
                    <img
                      src={require(`../images/${data.user_image}`)}
                      alt="img"
                      class="d-block ui-w-100 rounded-circle"
                    />

                    <div class="media-body ml-5 d-flex flex-column">
                      <div>
                        <h4 class="font-weight-bold mb-4 text-left">
                          {data.user_name}
                        </h4>

                        <div class="text-muted mb-4 text-left">
                          {data.user_sammary ? (
                            <p>{data.user_sammary}</p>
                          ) : (
                            <p>please write sammary about your self</p>
                          )}
                        </div>
                      </div>
                      <div class="d-flex ">
                        <a
                          href="javascript:void(0)"
                          class="d-inline-block text-body">
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
                          <div class="col-md-3 text-muted">User Name:</div>
                          <div class="col-md-9">{data.user_name}</div>
                        </div>

                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">Email:</div>
                          <div class="col-md-9">{data.user_email}</div>
                        </div>

                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">Phone:</div>
                          <div class="col-md-9">0785351933</div>
                        </div>
                      </div>
                      <div class="card-footer text-center p-0">
                        <div class="row no-gutters row-bordered row-border-light">
                          <span class="d-flex col flex-column text-body py-3">
                            <div class="font-weight-bold">24</div>
                            <div class="text-muted small">Booked Tours</div>
                          </span>
                          <span class="d-flex col flex-column text-body py-3">
                            {data.rating ? (
                              <div class="font-weight-bold">{data.rating}</div>
                            ) : (
                              <div class="font-weight-bold">uncalibrated</div>
                            )}
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
              </>
            );
          })}
          <div class="d-flex">
            <button onClick={handleLogout} className="btn btn-danger p-3 m-2 ">
              Logout
            </button>
          </div>
          {userData?.map((userinfo) => {
            return userinfo.user_role !== "Advisor" ? null : (
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
                    {tourJoin?.map((tour) => {
                      if (tour.is_published == 1) {
                        return (
                          <div class="table-row">
                            <div class="serial">{tour.id}</div>
                            <div class="tourdate">{tour.tour_date}</div>
                            <div class="Destination">
                              {tour.destination_name}
                            </div>
                            <div class="touristname">
                              <a
                                style={{ color: "gray" }}
                                href={tour.tour_route}>
                                Tour Route
                              </a>{" "}
                            </div>
                            <div class="price">{tour.tour_price} JOD</div>
                            <div class="review d-flex justify-content-center">
                              <a href="{{route('Book.edit'  , $Book->id)}}">
                                <button class="btn btn-info btn-s">
                                  <i class="bi bi-pencil"></i>
                                </button>
                              </a>
                              <form
                                action="{{route('Book.destroy' , $Book->id)}}"
                                method="POST">
                                <button
                                  class="btn btn-danger btn-s ms-2"
                                  type="submit"
                                  onClick="return confirm('Do you really want to delete');">
                                  <i class="bi bi-trash3"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div class="d-flex flex-row-reverse mt-3">
                  <p class="">
                    <Link
                      type="button"
                      class="btn btn-primary px-4 py-3 text-decoration-nsone"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      Publish New Tour
                    </Link>
                  </p>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}>
                      <div class="modal-dialog">
                        <div class="modal-content p-5">
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
                            <form onSubmit={handleSubmit}>
                              <label for="select" class="form-label">
                                Select Desitination
                              </label>
                              <select
                                class="form-select"
                                name="destination_id"
                                id="destination_id"
                                onChange={(e) => {
                                  setSelectedDestination(e.target.value);
                                }}
                                aria-label="Default select example">
                                <option selected value={null}>
                                  Select Destination
                                </option>
                                {destinations?.map((des) => {
                                  return (
                                    <option value={des.id}>
                                      {des.destination_name}
                                    </option>
                                  );
                                })}
                              </select>

                              <div class="mb-3">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label">
                                  Date
                                </label>
                                <input
                                  type="date"
                                  name="tour_date"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  onChange={(e) => {
                                    setDate(e.target.value);
                                  }}
                                />
                              </div>

                              <div class="mb-3">
                                <label for="Price" class="form-label">
                                  Price(JOD)
                                </label>
                                <input
                                  onChange={(e) => {
                                    setPrice(e.target.value);
                                  }}
                                  type="number"
                                  name="tour_price"
                                  class="form-control"
                                  id="Price"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="route" class="form-label">
                                  Tour Route(Map Link)
                                </label>
                                <input
                                  onChange={(e) => {
                                    setRoute(e.target.value);
                                  }}
                                  type="text"
                                  name="tour_route"
                                  class="form-control"
                                  id="route"
                                />
                              </div>

                              <div class="mb-3">
                                <label for="heroimg" class="form-label">
                                  Contact Number
                                </label>
                                <input
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                  }}
                                  name="advisor_contact_number"
                                  type="number"
                                  class="form-control"
                                  id="heroimg"
                                />
                              </div>

                              <div class="mb-3">
                                <label for="heroimg" class="form-label">
                                  Hero image
                                </label>
                                <input
                                  onChange={(e) =>
                                    setHeroImg(e.target.files[0])
                                  }
                                  name="hero_img"
                                  type="file"
                                  class="form-control"
                                  id="heroimg"
                                />
                              </div>

                              <div class="mb-3">
                                <label for="img1" class="form-label">
                                  Image 1
                                </label>
                                <input
                                  onChange={(e) => setImg1(e.target.files[0])}
                                  type="file"
                                  name="img_1"
                                  class="form-control"
                                  id="img1"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="img2" class="form-label">
                                  Image 2
                                </label>
                                <input
                                  onChange={(e) => setImg2(e.target.files[0])}
                                  type="file"
                                  name="img_2"
                                  class="form-control"
                                  id="img2"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="img3" class="form-label">
                                  Image 3
                                </label>
                                <input
                                  onChange={(e) => setImg3(e.target.files[0])}
                                  type="file"
                                  name="img_3"
                                  class="form-control"
                                  id="img3"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="img4" class="form-label">
                                  Image 4
                                </label>
                                <input
                                  onChange={(e) => setImg4(e.target.files[0])}
                                  type="file"
                                  name="img_4"
                                  class="form-control"
                                  id="img4"
                                />
                              </div>

                              <div class="mb-3">
                                <label for="description" class="form-label">
                                  Description
                                </label>
                                <textarea
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  name="tour_description"
                                  class="form-control"
                                  aria-label="description"></textarea>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary publishTourBtn"
                              data-bs-dismiss="modal">
                              Close
                            </button>
                            <button
                              type="submit"
                              class="btn btn-primary publishTourBtn">
                              Publish Tour
                            </button>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            );
          })}

          <div class="section-top-border">
            <h3 class="mb-30">Tours History</h3>
            <div class="progress-table-wrap">
              <div class="progress-table">
                <div class="table-head">
                  <div class="serial">Tour ID</div>
                  <div class="tourdate">Tour Date</div>
                  <div class="Destination">Destination</div>
                  {loginData?.data.user.user_role == "Advisor" ? (
                    <div class="touristname">Tourist Name</div>
                  ) : (
                    <div class="touristname">Advisor Name</div>
                  )}
                  <div class="price">Price</div>
                  <div class="review">Rate</div>
                </div>
                {bookedtours?.map((booked) => {
                  return (
                    <div class="table-row">
                      <div class="serial">{booked.tour_id}</div>
                      <div class="tourdate">{booked.tour_date}</div>
                      <div class="Destination">{booked.destination_name}</div>
                      <div class="touristname">{booked.user_name}</div>

                      <div class="price">{booked.tour_price}</div>
                      {booked.booked_rating == null ? (
                        <div class="review">
                          uncalibrated
                          <Button key={booked.id} onClick={handleOpenModal}>
                            <Modal
                              key={booked.id}
                              open={openModal}
                              onClose={handleCloseModal}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description">
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2">
                                  <Typography component="legend">
                                    Tour ID {booked.id}
                                  </Typography>
                                  <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                      setValue(newValue);
                                    }}
                                  />
                                  <Typography component="legend">
                                    Share Your experiance with us
                                  </Typography>
                                  <TextField
                                    id="outlined-multiline-static"
                                    label="Multiline"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                  />
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}>
                                  Duis mollis, est non commodo luctus, nisi erat
                                  porttitor ligula.
                                </Typography>
                              </Box>
                            </Modal>
                            <RateReviewOutlinedIcon
                              style={{
                                color: "#f15d30",
                                marginLeft: "8px",
                              }}></RateReviewOutlinedIcon>
                          </Button>
                        </div>
                      ) : (
                        <div class="review">
                          <Rating
                            name="size-medium"
                            readOnly
                            defaultValue={booked.booked_rating}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

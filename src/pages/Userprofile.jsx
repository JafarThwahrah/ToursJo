import React from "react";
import { Link } from "react-router-dom";
import "../styles/Userprofile.css";
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
import ReviewDialog from "../components/ReviewDialog";
import Swal from "sweetalert2";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function Userprofile() {
  // const { id } = useParams();

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

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
  const [editPassword, setEditPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userSammary, setUserSammary] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [checkUserInfo, setCheckUserInfo] = useState(false);
  const [userInfoGet, setUserInfoGet] = useState(null);

  const initialValue = {
    destination_id: "",
    tour_date: "",
    tour_price: "",
    tour_route: "",
    advisor_contact_number: "",
    hero_img: "",
    img_1: "",
    img_2: "",
    img_3: "",
    img_4: "",
    tour_description: "",
  };
  const [editTourformValues, setEditTourformValues] = useState(initialValue);

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [editUserformValues, setEditUserformValues] = useState(initialValue);

  const [formErrorsEditUserInfo, setFormErrorsEditUserInfo] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeEditTour = (e) => {
    setEditTourformValues({
      ...editTourformValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePublishNewTour = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setUserId([loginData?.data.user.id]);
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
    setCheckUserInfo(!checkUserInfo);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getoneuser/${userId}`)
      .then((response) => {
        console.log(response);

        setUserInfoGet(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [checkUserInfo]);

  useEffect(() => {
    setCheckUserInfo(!checkUserInfo);
    if (userData) {
      axios
        .get(`http://localhost:8000/api/gettours/${userData[0].id}`)
        .then((res) => {
          setTours(res.data.toursPerUser);
          setTourJoin(res.data.ToursJoinDes);
          // console.log(res);
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

          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginData) {
      navigate(`/login`);
    }
  }, [loginData]);

  const handleSubmitEditTour = (e, id) => {
    e.preventDefault();
    console.log(editTourformValues);
    const data = editTourformValues;
    const axiosAuth = "Bearer " + tokens;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post(`http://localhost:8000/api/editpublishedtour/${id}`, data)
      .then((response) => {
        console.log(response);
        Swal.fire("Updated!", "Tour Updated Successfully.", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleDeleteTour(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const axiosAuth = "Bearer " + tokens;
        axios.defaults.headers.common["Authorization"] = axiosAuth;
        axios
          .delete(`http://localhost:8000/api/tours/${id}`)
          .then((res) => {
            console.log(res);
            setTimeout(() => {
              window.location.reload(false);
            }, 500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  const validate = (data) => {
    const errors = {};
    const advisor_NumberRegex = /^(78|79|77)\d+$/;
    const tour_priceRegex = /^[0-9]*\.?[0-9]+$/;
    const tourRouteRegex = /^https:\/\/www\.google\.com\/maps\/.*$/;

    if (!data.advisor_contact_number) {
      errors.advisor_contact_number =
        "Advisor Contact Number Field is Required";
    } else if (!advisor_NumberRegex.test(data.advisor_contact_number)) {
      errors.advisor_contact_number =
        "Contact Number Must start with 77, 78 or 79";
    }
    if (!data.tour_price) {
      errors.tour_price = "Tour Price Field is Required";
    } else if (!tour_priceRegex.test(data.tour_price)) {
      errors.tour_price = "Tour Price Must be a valid number";
    }

    if (!data.tour_route) {
      errors.tour_route = "Tour Route Field is Required";
    } else if (!tourRouteRegex.test(data.tour_route)) {
      errors.tour_route = "Please Enter Valid map link from googlemap.com";
    }
    if (!data.tour_description) {
      errors.tour_description = "Tour Description Field is Required";
    }
    if (!data.hero_img) {
      errors.hero_img = "Hero Image Field is Required";
    }
    if (!data.img_1) {
      errors.img_1 = "Image 1 Field is Required";
    }
    if (!data.img_2) {
      errors.img_2 = "Image 2 Field is Required";
    }
    if (!data.img_3) {
      errors.img_3 = "Image 3 Field is Required";
    }
    if (!data.img_4) {
      errors.img_4 = "Image 4 Field is Required";
    }
    if (!data.destination_id) {
      errors.destination_id = "Destination Field is Required";
    }

    if (!data.tour_date) {
      errors.tour_date = "Tour Date Field is Required";
    }

    return errors;
  };

  const validateEditUserInfo = (username, editPassword) => {
    const errors = {};
    if (!username) {
      errors.username = "Please enter a username";
    }

    if (!editPassword) {
      errors.editPassword = "Please enter new Password";
    }

    return errors;
  };
  function handleEditForm(e, id) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormErrorsEditUserInfo(validateEditUserInfo(userName, editPassword));

    if (!userName || !editPassword) {
      return;
    }
    data.append("user_name", userName);
    data.append("user_sammary", userSammary);
    data.append("user_image", userImage);
    data.append("password", editPassword);

    const axiosAuth = "Bearer " + tokens;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post(`http://localhost:8000/api/user/${userData[0].id}`, data)
      .then((response) => {
        console.log(response);
        // setCheckUserInfo(!checkUserInfo);
        Swal.fire("Updated!", "Your Profile Updated Successfully.", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(userData);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
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

  const handleChangeEditUser = (e) => {
    e.preventDefault();

    setEditUserformValues({
      ...editUserformValues,
      [e.target.name]: e.target.value,
    });
  };

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
                    {userInfoGet && userInfoGet.user_image ? (
                      <img
                        src={require(`../images/${userInfoGet?.user_image}`)}
                        alt="img"
                        class="d-block ui-w-100 rounded-circle"
                        style={{ backgroundSize: "cover" }}
                      />
                    ) : (
                      <img
                        src="https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=170667a&w=0&k=20&c=cVOZ3OYMmZQt9_G4TXXiCM3a3oJQlJ-FLGdVO0rCPpY="
                        alt="img"
                        class="d-block ui-w-100 rounded-circle"
                      />
                    )}

                    <div class="media-body ml-5 d-flex flex-column">
                      <div>
                        <h4 class="font-weight-bold mb-4 text-left">
                          {userInfoGet?.user_name}
                        </h4>

                        <div class="text-muted mb-4 text-left">
                          {userInfoGet ? (
                            <p>
                              {userInfoGet && userInfoGet.user_sammary ? (
                                userInfoGet.user_sammary
                              ) : (
                                <p>please write sammary about your self</p>
                              )}
                            </p>
                          ) : (
                            <p>please write sammary about your self</p>
                          )}
                        </div>
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
                          <div className="d-flex flex-row-reverse">
                            <Link
                              type="button"
                              class="btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              <i class="bi bi-pencil"></i>
                            </Link>

                            <div
                              class="modal fade"
                              id="exampleModal1"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <form
                                    onSubmit={(e) =>
                                      handleEditForm(e, userData[0].id)
                                    }
                                    action="">
                                    <div class="modal-header">
                                      <h1
                                        class="modal-title fs-5"
                                        id="exampleModalLabel">
                                        Edit Your information
                                      </h1>
                                      <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                      <div class="mb-3">
                                        <p style={{ color: "red" }}>
                                          {formErrorsEditUserInfo.username}
                                        </p>
                                        <label
                                          for="exampleInputPassword1"
                                          class="form-label">
                                          Username
                                        </label>
                                        <input
                                          type="text"
                                          name="user_name"
                                          class="form-control"
                                          id="exampleInputPassword1"
                                          value={userName}
                                          onChange={(e) => {
                                            setUserName(e.target.value);
                                            handleChangeEditUser(e);
                                          }}
                                        />
                                      </div>

                                      <div class="mb-3">
                                        <p style={{ color: "red" }}>
                                          {formErrorsEditUserInfo.editPassword}
                                        </p>
                                        <label
                                          for="exampleInputPassword3"
                                          class="form-label">
                                          Password
                                        </label>
                                        <input
                                          type="password"
                                          name="password"
                                          class="form-control"
                                          id="exampleInputPassword3"
                                          onChange={(e) => {
                                            handleChangeEditUser(e);
                                            setEditPassword(e.target.value);
                                          }}
                                        />
                                      </div>
                                      <div class="mb-3">
                                        <label
                                          for="exampleInputPassword2"
                                          class="form-label">
                                          Personal Photo
                                        </label>
                                        <input
                                          type="file"
                                          name="user_image"
                                          class="form-control"
                                          id="exampleInputPassword2"
                                          onChange={(e) => {
                                            handleChangeEditUser(e);

                                            setUserImage(e.target.value);
                                          }}
                                        />
                                      </div>

                                      <div class="mb-3">
                                        <label
                                          for="exampleInputPassword4"
                                          class="form-label">
                                          Summary
                                        </label>

                                        <textarea
                                          onChange={(e) => {
                                            handleChangeEditUser(e);
                                            setUserSammary(e.target.value);
                                          }}
                                          type="text"
                                          name="user_sammary"
                                          id="exampleInputPassword4"
                                          value={userSammary}
                                          class="form-control"
                                          placeholder=""></textarea>
                                      </div>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal">
                                        Close
                                      </button>
                                      <button
                                        type="submit"
                                        class="btn btn-primary">
                                        Save changes
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">User Name:</div>
                          <div class="col-md-9">{userInfoGet?.user_name}</div>
                        </div>

                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">Email:</div>
                          <div class="col-md-9">{userInfoGet?.user_email}</div>
                        </div>

                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">Phone:</div>
                          <div class="col-md-9">0785351933</div>
                        </div>
                        <div class="row mb-2">
                          <div class="col-md-3 text-muted">Birthday:</div>
                          <div class="col-md-9">May 3, 1995</div>
                        </div>
                      </div>

                      <div class="card-footer text-center p-0">
                        <div class="row no-gutters row-bordered row-border-light">
                          <span class="d-flex col flex-column text-body py-3">
                            {data.rating ? (
                              <>
                                <div class="font-weight-bold">
                                  {data.rating.toFixed(2)}
                                </div>
                                <span>Your Rate</span>
                              </>
                            ) : !data.rating && data.user_role == "advisor" ? (
                              <div class="font-weight-bold">uncalibrated</div>
                            ) : (
                              ""
                            )}

                            {data.user_role == "advisor" ? (
                              <div class="text-muted small">Your Rate</div>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex">
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger p-3 m-2 ">
                    Logout
                  </button>
                  {data.user_role == "Admin" ? (
                    <a href="http://localhost:3001/dashboard">
                      <button className="btn btn-warning bg-gradient text-light p-3 m-2 ">
                        Go To Admin Dashboard
                      </button>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </>
            );
          })}
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
                              <Link
                                type="button"
                                class="btn btn-info btn-s"
                                data-bs-toggle="modal"
                                data-bs-target={`#Modal${tour.id}`}>
                                <i class="bi bi-pencil"></i>
                              </Link>
                              <div
                                class="modal fade"
                                id={`Modal${tour.id}`}
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <Box
                                  component="form"
                                  noValidate
                                  onSubmit={(e) =>
                                    handleSubmitEditTour(e, tour.id)
                                  }
                                  sx={{ mt: 3 }}>
                                  <div class="modal-dialog">
                                    <div class="modal-content p-5">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5"
                                          id="exampleModalLabel">
                                          Edit Published Your
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <form
                                          onSubmit={(e) =>
                                            handleSubmitEditTour(e, tour.id)
                                          }>
                                          <label
                                            for="select"
                                            class="form-label">
                                            Select Desitination
                                          </label>
                                          <select
                                            class="form-select"
                                            name="destination_id"
                                            id="destination_id"
                                            onChange={(e) => {
                                              handleChangeEditTour(e);
                                            }}
                                            aria-label="Default select example">
                                            <option
                                              selected
                                              value={
                                                tour.destination_name == "Aqaba"
                                                  ? 1
                                                  : tour.destination_name ==
                                                    "Dead Sea"
                                                  ? 2
                                                  : tour.destination_name ==
                                                    " Petra"
                                                  ? 3
                                                  : tour.destination_name ==
                                                    " Jerash"
                                                  ? 4
                                                  : tour.destination_name ==
                                                    "Nebo Mountain"
                                                  ? 5
                                                  : tour.destination_name ==
                                                    "Amman"
                                                  ? 6
                                                  : 0
                                              }>
                                              {tour.destination_name}
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
                                              value={
                                                editTourformValues?.tour_date
                                              }
                                              onChange={(e) => {
                                                handleChangeEditTour(e);
                                              }}
                                            />
                                          </div>

                                          <div class="mb-3">
                                            <label
                                              for="Price"
                                              class="form-label">
                                              Price(JOD)
                                            </label>
                                            <input
                                              onChange={(e) => {
                                                handleChangeEditTour(e);
                                              }}
                                              type="number"
                                              name="tour_price"
                                              class="form-control"
                                              id="Price"
                                              value={
                                                editTourformValues?.tour_price
                                              }
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="route"
                                              class="form-label">
                                              Tour Route(Map Link)
                                            </label>
                                            <input
                                              onChange={(e) => {
                                                handleChangeEditTour(e);
                                              }}
                                              type="text"
                                              name="tour_route"
                                              class="form-control"
                                              id="route"
                                              value={
                                                editTourformValues?.tour_route
                                              }
                                            />
                                          </div>

                                          <div class="mb-3">
                                            <label
                                              for="heroimg"
                                              class="form-label">
                                              Contact Number
                                            </label>
                                            <input
                                              onChange={(e) => {
                                                handleChangeEditTour(e);
                                              }}
                                              name="advisor_contact_number"
                                              type="number"
                                              class="form-control"
                                              id="heroimg"
                                              value={
                                                editTourformValues?.advisor_contact_number
                                              }
                                            />
                                          </div>

                                          <div class="mb-3">
                                            <label
                                              for="heroimg"
                                              class="form-label">
                                              Hero image
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              name="hero_img"
                                              type="file"
                                              class="form-control"
                                              id="heroimg"
                                            />
                                          </div>

                                          <div class="mb-3">
                                            <label
                                              for="img1"
                                              class="form-label">
                                              Image 1
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              type="file"
                                              name="img_1"
                                              class="form-control"
                                              id="img1"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="img2"
                                              class="form-label">
                                              Image 2
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              type="file"
                                              name="img_2"
                                              class="form-control"
                                              id="img2"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="img3"
                                              class="form-label">
                                              Image 3
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              type="file"
                                              name="img_3"
                                              class="form-control"
                                              id="img3"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="img4"
                                              class="form-label">
                                              Image 4
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              type="file"
                                              name="img_4"
                                              class="form-control"
                                              id="img4"
                                            />
                                          </div>

                                          <div class="mb-3">
                                            <label
                                              for="description"
                                              class="form-label">
                                              Description
                                            </label>
                                            <textarea
                                              onChange={(e) =>
                                                handleChangeEditTour(e)
                                              }
                                              name="tour_description"
                                              class="form-control"
                                              aria-label="description">
                                              {tour.tour_description}
                                            </textarea>
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
                                          Update
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </Box>
                              </div>

                              <button
                                onClick={(e) => handleDeleteTour(tour.id)}
                                class="btn btn-danger btn-s ms-2"
                                type="submit">
                                <i class="bi bi-trash3"></i>
                              </button>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div class="d-flex flex-row-reverse mt-3">
                  <Link
                    type="button"
                    class="btn btn-primary px-4 py-3 text-decoration-nsone"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Publish New Tour
                  </Link>

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
                              <p style={{ color: "red" }}>
                                {formErrors?.destination_id}
                              </p>
                              <select
                                class="form-select"
                                name="destination_id"
                                id="destination_id"
                                onChange={(e) => {
                                  setSelectedDestination(e.target.value);
                                  handleChangePublishNewTour(e);
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.tour_date}
                                </p>
                                <input
                                  type="date"
                                  name="tour_date"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  onChange={(e) => {
                                    setDate(e.target.value);
                                    handleChangePublishNewTour(e);
                                  }}
                                />
                              </div>

                              <div class="mb-3">
                                <label for="Price" class="form-label">
                                  Price(JOD)
                                </label>
                                <p style={{ color: "red" }}>
                                  {formErrors?.tour_price}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setPrice(e.target.value);
                                    handleChangePublishNewTour(e);
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.tour_route}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setRoute(e.target.value);
                                    handleChangePublishNewTour(e);
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.advisor_contact_number}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                    handleChangePublishNewTour(e);
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.hero_img}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setHeroImg(e.target.files[0]);
                                    handleChangePublishNewTour(e);
                                  }}
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.img_1}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setImg1(e.target.files[0]);
                                    handleChangePublishNewTour(e);
                                  }}
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.img_2}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setImg2(e.target.files[0]);
                                    handleChangePublishNewTour(e);
                                  }}
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.img_3}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setImg3(e.target.files[0]);
                                    handleChangePublishNewTour(e);
                                  }}
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.img_4}
                                </p>
                                <input
                                  onChange={(e) => {
                                    setImg4(e.target.files[0]);
                                    handleChangePublishNewTour(e);
                                  }}
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
                                <p style={{ color: "red" }}>
                                  {formErrors?.tour_description}
                                </p>
                                <textarea
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                    handleChangePublishNewTour(e);
                                  }}
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

                      <div class="price">{booked.tour_price} JOD</div>
                      {booked.booked_rating == null ? (
                        <div class="review">
                          <ReviewDialog
                            role={userData[0].user_role}
                            booked={booked.tour_id}
                          />
                        </div>
                      ) : booked.booked_rating == null ? (
                        <div class="review">
                          <p>Uncalibrated</p>
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

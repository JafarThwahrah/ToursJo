import React from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "../components/CreditCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Alert2 = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Checkout() {
  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const [tokens, setTokens] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openErr, setOpenErr] = useState(false);
  const [tourDetails, setTourDetails] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const handleClose = (event) => {
    setOpen(false);
  };

  const handleCloseErr = (event) => {
    setOpenErr(false);
  };
  useEffect(() => {
    if (!loginData) {
      navigate(`/login`);
    }
  }, [loginData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handlePayment(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("user_id2", tourDetails[0].user_id);
    data.append("tour_id", tourDetails[0].id);
    data.append("tour_price", tourDetails[0].tour_price + 3);
    data.append("user_id", userData[0].id);
    data.append("user_role", userData[0].user_role);

    const axiosAuth = "Bearer " + tokens;

    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post("http://localhost:8000/api/checkouttour", data)
      .then((res) => {
        console.log(res);

        if (res.data.status == "Wrong action") {
          setOpenErr(true);
          setTimeout(() => {
            Redirect();
          }, 2000);
        } else {
          setOpen(true);
          setTimeout(() => {
            Redirect();
          }, 1000);
        }
        // navigate("/destination");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const navigate = useNavigate();
  useEffect(() => {
    setTokens(loginData?.data.token);
    setUserData([loginData?.data.user]);

    axios
      .get(`http://localhost:8000/api/getsingletour/${params.id}`)
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setTourDetails(res.data.singleTour);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Redirect() {
    navigate("/destination");
  }
  // console.log(loginData);
  console.log(userData);
  console.log(tokens);

  return (
    <>
      {isLoading && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          className="loadingCircle">
          <CircularProgress color="primary" />
        </div>
      )}
      {!isLoading && (
        <>
          <section
            class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome checkoutIMGG userProfileIMG"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/glowing-credit-card-with-circuit-lines-background_1017-36204.jpg?w=2000)",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",
              // height: "60rem",
            }}>
            <div class="container">
              <div class="row slider-text js-fullheight align-items-end justify-content-center">
                {" "}
                <h1 class="mb-0 bread">Checkout</h1>
              </div>
            </div>
          </section>

          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}>
              Tour Booked Successfully!
            </Alert>
          </Snackbar>

          <Snackbar
            open={openErr}
            autoHideDuration={3000}
            onClose={handleCloseErr}>
            <Alert2
              onClose={handleCloseErr}
              severity="error"
              sx={{ width: "100%" }}>
              Wrong action! <br />
              Advisors cannot book tours.
            </Alert2>
          </Snackbar>
          <div class="p-5">
            <section class="">
              <div
                class="d-flex justify-content-around"
                style={{ flexWrap: "wrap" }}>
                <div class="w-75">
                  <PaymentForm />
                </div>
                {tourDetails?.map((info) => {
                  return (
                    <div class="w-25">
                      <div class="card mb-4">
                        <div
                          style={{ backgroundColor: "#f15d30" }}
                          class="card-header py-3">
                          <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Tour Price
                              <span>{info.tour_price} JOD</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                              Extra Fees
                              <span>3 JOD</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>Total amount</strong>
                              </div>
                              <span>
                                <strong>{info.tour_price + 3} JOD</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex" style={{ marginLeft: "5rem" }}>
                <button
                  onClick={(e) => handlePayment(e)}
                  className="btn btn-primary btn-lg btn-block w-25"
                  type="submit">
                  Continue to checkout
                </button>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;

import React from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "../components/CreditCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Checkout() {
  const params = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  function handlePayment() {
    //post request booked tour
  }
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getsingletour/${params.id}`)
      .then((res) => {
        setTourDetails(res.data.singleTour);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!loginData) {
    navigate("/login");
  }

  console.log(loginData);
  console.log(tourDetails);

  return (
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
          <div className="d-flex" style={{ marginLeft: "6.5rem" }}>
            <button
              onClick={{ handlePayment }}
              className="btn btn-primary btn-lg btn-block w-25"
              type="submit">
              Continue to checkout
            </button>
          </div>
        </section>
      </div>
      ;
    </>
  );
}

export default Checkout;

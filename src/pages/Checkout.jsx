import React from "react";
import PaymentForm from "../components/CreditCard";
import "../styles/checkout.css";
function Checkout() {
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
          <div class="row slider-text js-fullheight align-items-end justify-content-center"></div>
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
                      Products
                      <span>$53.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Checkout;

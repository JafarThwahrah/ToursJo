import React from "react";

function Tourdetails() {
  return (
    <div>
      <div class="section-top-border p-5">
        <h3 class="mb-30">Tour Details</h3>

        <div class="d-flex">
          <div class="row gallery-item">
            <div class="col-md-6 me-4">
              <a href="assets/img/elements/g5.jpg" class="img-pop-up">
                <div
                  class="single-gallery-image"
                  style={{
                    background: "url(assets/img/elements/g5.jpg)",
                    width: "45rem",
                    height: "27rem",
                  }}></div>
              </a>
            </div>
          </div>
          <div class="row gallery-item">
            <div class="col-md-6">
              <a href="assets/img/elements/g1.jpg" class="img-pop-up">
                <div
                  class="single-gallery-image"
                  style={{
                    background: "url(assets/img/elements/g1.jpg)",
                  }}></div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="assets/img/elements/g2.jpg" class="img-pop-up">
                <div
                  class="single-gallery-image"
                  style={{
                    background: "url(assets/img/elements/g2.jpg)",
                  }}></div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="assets/img/elements/g3.jpg" class="img-pop-up">
                <div
                  class="single-gallery-image"
                  style={{
                    background: "url(assets/img/elements/g3.jpg)",
                  }}></div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="assets/img/elements/g4.jpg" class="img-pop-up">
                <div
                  class="single-gallery-image"
                  style={{
                    background: "url(assets/img/elements/g4.jpg)",
                  }}></div>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="section-top-border col-md-8">
            <div class="row">
              <div class="col-lg-12">
                <blockquote class="generic-blockquote text-start">
                  <h5 class="text-start">Overview</h5>
                  “Recently, the US Federal government banned online casinos
                  from operating in America by making it illegal to transfer
                  money to them through any US bank or payment system. As a
                  result of this law, most of the popular online casino networks
                  such as Party Gaming and PlayTech left the United States.
                  Overnight, online casino
                  <h5 class="text-start mt-4">Activities</h5>
                  <ul>
                    <li>-1</li>
                    <li>-2</li>
                    <li>-3</li>
                  </ul>
                </blockquote>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-5">
            <div class="card mb-4">
              <div class="card-header py-3">
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

                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <h3 class="mb-5">Check the Tour Route</h3>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1zVjn5ARZ8aDlfWm3aaTsxNRD8EJFxpk&ehbc=2E312F"
          width="640"
          height="480"
          class="col-md-10 m-5"></iframe>
      </div>
    </div>
  );
}

export default Tourdetails;

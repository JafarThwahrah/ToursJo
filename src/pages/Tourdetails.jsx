import React, { useEffect, useState } from "react";
import "../styles/style2.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Tourdetails() {
  const [tourDetails, setTourDetails] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  function handleCheckoutClick() {
    navigate(`/checkout/${tourDetails[0].id}`);
  }
  const extraFees = 3;

  console.log(tourDetails);
  return (
    <div>
      <section
        class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome userProfileIMG"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/002/010/782/large_2x/desert-landscape-with-camels-in-the-wadi-rum-jordan-free-photo.JPG)",
          backgroundPositionY: "bottom",
        }}>
        <div class="container">
          <div class="row slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <h1 class="mb-0 bread">Tour Details</h1>
            </div>
          </div>
        </div>
      </section>
      {tourDetails?.map((info) => {
        return (
          <div key={Math.random()}>
            <div className="section-top-border p-5">
              <div className="d-flex">
                <div className="row gallery-item">
                  <div className="col-md-6 me-4">
                    {/* <div
                      className="single-gallery-image"
                      style={{
                        background: `url(../images/${info.hero_img})`,
                        width: "45rem",
                        height: "27rem",
                      }}></div> */}

                    <img
                      className="single-gallery-image"
                      style={{
                        width: "45rem",
                        height: "27rem",
                        objectFit: "cover",
                      }}
                      src={require(`../images/${info.hero_img}`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row gallery-item">
                  <div className="col-md-6">
                    <img
                      style={{ objectFit: "cover" }}
                      className="single-gallery-image"
                      src={require(`../images/${info.img_1}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      style={{ objectFit: "cover" }}
                      className="single-gallery-image"
                      src={require(`../images/${info.img_2}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      style={{ objectFit: "cover" }}
                      className="single-gallery-image"
                      src={require(`../images/${info.img_4}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      style={{ objectFit: "cover" }}
                      className="single-gallery-image"
                      src={require(`../images/${info.img_4}`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="section-top-border col-md-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <blockquote className="generic-blockquote text-start">
                        <h5 className="text-start">Overview</h5>
                        {info.tour_description}
                        <hr />
                        <p style={{ fontWeight: "bold" }}>
                          Advisor Contact Number: {info.advisor_contact_number}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-5">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Tour Price
                          <span>{info.tour_price} JOD</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Service fees
                          <span>{extraFees}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                          </div>
                          <span>
                            <strong>{info.tour_price + extraFees} JOD</strong>
                          </span>
                        </li>
                      </ul>

                      <button
                        onClick={handleCheckoutClick}
                        type="button"
                        className="btn btn-primary btn-lg btn-block">
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <h3 className="mb-5">Check the Tour Route</h3>
              <iframe
                src={`${info.tour_route}`}
                width="640"
                height="480"
                className="col-md-10 m-5"></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tourdetails;

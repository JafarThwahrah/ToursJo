import React, { useEffect, useState } from "react";
import "../styles/style2.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Tourdetails() {
  const [tourDetails, setTourDetails] = useState([]);
  const params = useParams();
  console.log(params);
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
  const extraFees = 3;
  console.log(tourDetails);
  return (
    <div>
      {tourDetails?.map((info) => {
        return (
          <div key={Math.random()}>
            <div className="section-top-border p-5">
              <h3 className="mb-30">Tour Details</h3>

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
                      }}
                      src={require(`../images/${info.hero_img}`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row gallery-item">
                  <div className="col-md-6">
                    <img
                      className="single-gallery-image"
                      src={require(`../images/${info.img_1}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="single-gallery-image"
                      src={require(`../images/${info.img_2}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="single-gallery-image"
                      src={require(`../images/${info.img_4}`)}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
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
                        <h5 className="text-start mt-4">Activities</h5>
                        <ul>
                          <li>-1</li>
                          <li>-2</li>
                          <li>-3</li>
                        </ul>
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

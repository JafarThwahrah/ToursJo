import { Link } from "react-router-dom";
import "../styles/Destination.css";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import { useEffect } from "react";
import TourCard from "../components/TourCard";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Destination() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searched, setSearched] = useState();
  const [selected, setSelected] = useState();
  const [filtered, setFiltered] = useState();
  const [tours, setTours] = useState([]);
  const [tours1, setTours1] = useState([]);
  const [destinations, setDestinations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    for (let i = 0; i < tours1?.length; i++) {
      if (tours[i].created_at === tours1[i].created_at) {
        tours[i].id = tours1[i].id;
      }
    }
    setFiltered(tours);
  }, [tours]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/gettours")
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        setTours1(res.data.tours1);
        setTours(res.data.tours);
        console.log(tours);
        console.log(tours1);
        for (let i = 0; i < tours1?.length; i++) {
          if (tours[i].created_at === tours1[i].created_at) {
            tours[i].id = tours1[i].id;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    filterData();
  }, [searched]);

  useEffect(() => {
    filterData();
  }, [selected]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations")
      .then((res) => {
        setDestinations(res.data.destinations);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function filterData() {
    let filteredData =
      searched && selected
        ? tours.filter((tour) => {
            return (
              (tour.user_name
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) &&
                tour.destination_id == selected) ||
              (tour.destination_name
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) &&
                tour.destination_id == selected)
            );
          })
        : searched
        ? tours.filter((tour) => {
            return (
              tour.user_name
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) ||
              tour.destination_name
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase())
            );
          })
        : selected
        ? tours.filter((tour) => {
            return tour.destination_id == selected;
          })
        : tours;

    setFiltered(filteredData);
  }

  const freshFilter = () => {
    window.location.reload(false);
  };

  // for (let i = 0; i < tours1?.length; i++) {
  //   tours[i].id = tours1[i].id;
  // }

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = filtered
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((tour) => {
      {
        return tour.deleted_at === null ? (
          <div class="col-md-4">
            <div class="m-2">
              <TourCard
                key={Math.random()}
                id={tour.id}
                userName={tour.user_name}
                destinationName={tour.destination_name}
                userImage={tour.user_image}
                userRating={tour.rating}
                tourDescription={tour.tour_description}
                tourDate={tour.tour_date}
                tourCreationDate={tour.created_at}
                heroImg={tour.hero_img}
              />
            </div>
          </div>
        ) : null;
      }
    });

  const pageCount = Math.ceil(filtered?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // console.log(destinations);
  console.log(filtered);
  console.log(tours);
  console.log(tours);
  console.log(tours1.data);

  return (
    <div>
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
            class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/0/05/Arch_of_Hadrian%2C_Jerash%2C_Jordan2.jpg)",
            }}>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                <div class="col-md-9 pb-5 text-center">
                  <p class="breadcrumbs">
                    <span class="mr-2">
                      <Link to="/">
                        Home <i class="fa fa-chevron-right"></i>
                      </Link>
                    </span>{" "}
                    <span>
                      Tour List <i class="fa fa-chevron-right"></i>
                    </span>
                  </p>
                  <h1 class="mb-0 bread">Destination</h1>
                </div>
              </div>
            </div>
          </section>
          <section class="ftco-section ftco-no-pb">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="search-wrap-1">
                    <form action="#" class="search-property-1">
                      <div class="row no-gutters">
                        <div class="col-lg d-flex">
                          <div class="form-group p-4 border-0">
                            <label for="#">Search</label>
                            <div class="form-field">
                              <div class="icon">
                                <span class="fa fa-search"></span>
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Search place"
                                onChange={(e) => setSearched(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg d-flex">
                          <div class="form-group p-4">
                            <label for="#">Check-in date</label>
                            <div class="form-field">
                              <div class="icon">
                                <span class="fa fa-calendar"></span>
                              </div>
                              <input
                                type="text"
                                class="form-control checkin_date"
                                placeholder="Check In Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg d-flex">
                          <div class="form-group p-4">
                            <label for="#">Check-out date</label>
                            <div class="form-field">
                              <div class="icon">
                                <span class="fa fa-calendar"></span>
                              </div>
                              <input
                                type="text"
                                class="form-control checkout_date"
                                placeholder="Check Out Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg d-flex">
                          <div class="form-group p-4">
                            <label for="#">Select Destination</label>
                            <div class="form-field">
                              <div class="select-wrap">
                                <div class="icon">
                                  <span class="fa fa-chevron-down"></span>
                                </div>
                                <select
                                  name=""
                                  id=""
                                  class="form-control"
                                  onChange={(e) => setSelected(e.target.value)}>
                                  <option value="">Select Destination</option>
                                  {destinations?.map((des) => {
                                    return (
                                      <option value={des.id}>
                                        {des.destination_name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg d-flex">
                          <div class="form-group d-flex w-100 border-0">
                            <div class="form-field w-100 align-items-center d-flex">
                              <input
                                type="button"
                                value="Reset Filter"
                                class="align-self-stretch form-control btn btn-primary"
                                onClick={freshFilter}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="ftco-section">
            <div class="container">
              <div class="row">
                {displayUsers}
                <i class="mt-5" />
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Destination;

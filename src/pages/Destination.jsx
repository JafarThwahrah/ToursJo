import { Link } from "react-router-dom";
import "../styles/Destination.css";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import JsonData from "../MOCK_DATA.json";
import { useEffect } from "react";
import TourCard from "../components/TourCard";
function Destination() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searched, setSearched] = useState();
  const [selected, setSelected] = useState();
  const [filtered, setFiltered] = useState();
  const [users, setUsers] = useState(JsonData.slice(0, 50));

  useEffect(() => {
    setFiltered(users);
  }, []);

  useEffect(() => {
    filterData();
  }, [searched]);

  useEffect(() => {
    filterData();
  }, [selected]);

  function filterData() {
    let filteredData =
      searched && selected
        ? users.filter((user) => {
            return (
              user.first_name
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) && user.id == selected
            );
          })
        : searched
        ? users.filter((user) => {
            return user.first_name
              .trim()
              .toLowerCase()
              .includes(searched.toLowerCase());
          })
        : selected
        ? users.filter((user) => {
            return user.id == selected;
          })
        : users;

    setFiltered(filteredData);
  }

  const freshFilter = () => {
    window.location.reload(false);
  };

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = filtered
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div class="col-md-4">
          <div class="m-2">
            <TourCard firstname={user.first_name} lastname={user.last_name} />
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(searched);
  console.log(selected);
  console.log(filtered);
  return (
    <div>
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
                        <label for="#">Destination</label>
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
                              <option value="Amman">Amman</option>
                              <option value="Ajloun">Ajloun</option>
                              <option value="Aqaba">Aqaba</option>
                              <option value="Dead Sea">Dead Sea</option>
                              <option value="Petra">Petra</option>
                              <option value="Jerash">Jerash</option>
                              <option value="Irbid">Irbid</option>
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
    </div>
  );
}

export default Destination;

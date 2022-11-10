import { Link } from "react-router-dom";
import "../styles/Destination.css";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import JsonData from "../MOCK_DATA.json";
function Destination() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div class="col-md-4">
          <div class="project-wrap hotel">
            <a
              href="#"
              class="img"
              style={{ backgroundImage: "url(images/hotel-resto-1.jpg)" }}>
              <span class="price">$200/person</span>
            </a>
            <div class="text p-4">
              <p class="star mb-2">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <span class="days">8 Days Tour</span>
              <h3>
                <a href="#">Manila Hotel</a>
              </h3>
              <p class="location">
                <span class="fa fa-map-marker"></span> Manila, Philippines
              </p>
              <ul>
                <li>
                  <span class="flaticon-shower"></span>2
                </li>
                <li>
                  <span class="flaticon-king-size"></span>3
                </li>
                <li>
                  <span class="flaticon-mountains"></span>Near Mountain
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <section
        class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center"
        style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/0/05/Arch_of_Hadrian%2C_Jerash%2C_Jordan2.jpg)" }}>
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
                        <label for="#">Select City</label>
                        <div class="form-field">
                          <div class="select-wrap">
                            <div class="icon">
                              <span class="fa fa-chevron-down"></span>
                            </div>
                            <select name="" id="" class="form-control">
                              <option value="">select destination...</option>
                              <option value="">Amman</option>
                              <option value="">Ajloun</option>
                              <option value="">Aqaba</option>
                              <option value="">Dead Sea</option>
                              <option value="">Petra</option>
                              <option value="">Jerash</option>
                              <option value="">Irbid</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group d-flex w-100 border-0">
                        <div class="form-field w-100 align-items-center d-flex">
                          <input
                            type="submit"
                            value="Search"
                            class="align-self-stretch form-control btn btn-primary"
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

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData([loginData?.data.user]);
  }, [loginData]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar">
        <div className="container">
          <NavLink
            to="/"
            className="nav-link navbar-brand "
            style={{ height: "75px", width: "75px" }}>
            <img
              style={{ width: "40px", height: "40px" }}
              src="/images/logo2.png"
              alt=""
            />
            <span>TourJo</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="">Menu</span>
          </button>

          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ftco-nav">
            <span class="">Menu</span>
          </button> */}

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/destination" className="nav-link">
                  Destination
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                {!loginData ? (
                  <NavLink to="/Login" className="nav-link">
                    Login
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/userprofile/${loginData?.data.user.id}`}
                    className="nav-link">
                    Profile
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Err() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-md-center flex-column align-items-center">
      <h1>
        Page Not Found <br />
        <span style={{ color: "#f15d30" }}> 404</span> <br />
      </h1>
      <div>
        <Link to="/">
          <p>Back to Home Page</p>
        </Link>
      </div>
    </div>
  );
}

export default Err;

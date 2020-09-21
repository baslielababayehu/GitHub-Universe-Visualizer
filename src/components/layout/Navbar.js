import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbarcustom = ({ icon, title }) => {
  return (
    <nav
      expand="lg"
      style={{ backgroundColor: "#292b2c", boxShadow: "1px 1px 7px grey" }}
      className="navbar navbar-light border mb-3"
    >
      <Navbar.Brand href="#home" style={{ fontSize: "1rem", color: "white" }}>
        <i style={{ fontSize: "1.5rem", color: "white" }} className={icon}></i>{" "}
        GitHub Universe
      </Navbar.Brand>
      <ul>
        <li style={{ display: "inline" }}>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline" }} className="ml-4">
          <Link to="/about" style={{ color: "white" }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defualtProps = {
  title: "Github Insights",
  icon: "fa fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbarcustom;

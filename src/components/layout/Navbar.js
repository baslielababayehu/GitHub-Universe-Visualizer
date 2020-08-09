import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const Navbarcustom = ({ icon, title }) => {
  return (
    <nav
      expand="lg"
      style={{ backgroundColor: "success" }}
      className="navbar navbar-light border mb-3"
    >
      <Navbar.Brand href="#home">
        <i style={{ fontSize: "1.5rem" }} className={icon}></i> {title}
      </Navbar.Brand>
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

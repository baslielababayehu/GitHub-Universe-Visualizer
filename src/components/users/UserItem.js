import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
// import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className=" col-4 card text-center ">
      <img
        style={{}}
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a href="https://google.com" className="btn btn-dark btn-sm my-3">
        View Full Profile
      </a>{" "}
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

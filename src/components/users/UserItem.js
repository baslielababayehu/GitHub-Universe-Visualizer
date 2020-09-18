import React from "react";
// import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div
      className=" col-xl-2 col-lg-3 col-m-4 col-sm-5 col-xs-12 card  text-white my-2  mr-2 pt-2 "
      style={{
        backgroundColor: "#292b2c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ borderRadius: "75px", width: "80px" }}
        src={avatar_url}
        alt=""
        className=""
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-secondary btn-sm my-3">
        View Full Profile
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

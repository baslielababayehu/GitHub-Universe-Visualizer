import React, { Component, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  if (githubContext.loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <div
        className="row m-0 p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Users;

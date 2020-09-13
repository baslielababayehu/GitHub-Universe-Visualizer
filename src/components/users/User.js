import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;
  return (
    <div className="p-2">
      <Link to="/" className="btn btn-light">
        <i class="fa fa-chevron-left"></i> Back to search
      </Link>
      <div className="ml-2"></div>
      <div className="card col-12 p-2">
        <div className="row">
          <div className="col-auto">
            <img
              src={avatar_url}
              alt=""
              style={{
                height: "auto",
                maxWidth: "150px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "4px",
              }}
            />
            Hireable:{" "}
            {hireable ? (
              <i className="fa fa-check text-success" />
            ) : (
              <i className="fa fa-times-circle text-danger" />
            )}
            <div>
              <a href={html_url} className="btn btn-dark my-1">
                Visit GitHub Profile
              </a>
            </div>
          </div>

          <div className="col-4">
            <Fragment>
              <h3>Bio</h3>
              {bio ? (
                <p>{bio} </p>
              ) : (
                <p>
                  <em>[no bio listed]</em>
                </p>
              )}
            </Fragment>
          </div>
          <div className="col-4 border">
            <Fragment>
              <h3>Personal Information</h3>
              {name ? (
                <p>Name: {name}</p>
              ) : (
                <p>
                  <em>Name not available</em>
                </p>
              )}
              {location ? (
                <ul>Location: {location}</ul>
              ) : (
                <p>
                  <em>Location not available</em>
                </p>
              )}
            </Fragment>
          </div>
        </div>
      </div>
      <div className="card col-12 mt-3">
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="badge badge-secondary col-2 m-2">
            Followers: {followers}
          </div>
          <div className="badge badge-success col-2 m-2">
            following: {following}
          </div>
          <div className="badge badge-dark col-2 m-2">
            public repos: {public_repos}
          </div>
          <div className="badge badge-danger col-2 m-2">
            Public Gists: {public_gists}
          </div>
        </div>
      </div>
      <Repos repos={githubContext.repos} />
    </div>
  );
};

export default User;

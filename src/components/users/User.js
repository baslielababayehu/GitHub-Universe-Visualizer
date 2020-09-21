import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";
import Visualizations from "../Repos/Visualizations";
import { Footer } from "../layout/Footer";

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
    languages_url,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;

  return (
    <div className="p-2">
      <Link to="/" className="btn btn-sm btn-block btn-secondary mb-2">
        <i className="fa fa-chevron-left"></i> Back to search
      </Link>
      <div className="ml-2"></div>
      <div className="col-12 p-2" style={{}}>
        <div
          className="row m-0 p-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-12 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={avatar_url}
              alt=""
              style={{
                height: "auto",
                maxWidth: "150px",

                borderRadius: "75px",
              }}
            />
          </div>
          <div className="col-12 text-center mt-3">
            {name ? (
              <p>{name}</p>
            ) : (
              <p>
                <em>Name not Listed</em>
              </p>
            )}
          </div>
          <div className="col-12 text-center">
            {location ? (
              <p>
                <i class="fa fa-map-marker"></i> {location}
              </p>
            ) : (
              <p>
                <em>Location not available</em>
              </p>
            )}
          </div>
          <div className="col-12 text-center">
            Hireable:{" "}
            {hireable ? (
              <i className="fa fa-check text-success" />
            ) : (
              <i className="fa fa-times-circle text-danger" />
            )}
          </div>
          <div className="text-center">
            <a href={html_url} className="btn btn-secondary my-1">
              Visit GitHub Profile
            </a>
          </div>
          <br></br>
        </div>
      </div>

      <div className=" col-12 mt-3 ">
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgray",
          }}
        >
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center">
            Followers: {followers}
          </div>
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center">
            following: {following}
          </div>
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center">
            public repos: {public_repos}
          </div>
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center">
            Public Gists: {public_gists}
          </div>
        </div>
      </div>
      <br></br>
      <h5>Public Repos</h5>
      <div className="row p-1 m-0">
        <Repos repos={githubContext.repos} />
      </div>

      <div style={{ minHeight: "50vh" }} className="mb-3">
        <Visualizations repos={githubContext.repos} />
      </div>

      <Footer />
    </div>
  );
};

export default User;

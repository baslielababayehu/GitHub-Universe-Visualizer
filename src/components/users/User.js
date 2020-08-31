import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
  render() {
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
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div className="p-2">
        <Link to="/" className="btn btn-light ml-2">
          Back to search
        </Link>
        <div className="ml-2">
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </div>
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
              <a href={html_url} className="btn btn-dark my-1">
                Visit GitHub Profile
              </a>
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
      </div>
    );
  }
}

export default User;

import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      htl_url,
      followers,
      following,
      public_repos,
      public_gists,
      hirable,
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <Spinner />;
    return <div>this is the {name}</div>;
  }
}

export default User;

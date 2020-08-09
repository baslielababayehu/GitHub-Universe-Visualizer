import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  PropTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  updateValue = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  submit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.setState({ text: document.getElementById("search-button").value });
      console.log(document.getElementById("search-button").value);

      console.log(this.state.text);
      this.props.searchUsers(document.getElementById("search-button").value);
    }

    // this.setState({ text: "" });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.submit} className="form">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Search for a User"
            id="search-button"
            value={this.state.text}
            onChange={this.updateValue}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block my-2"
          />
        </form>
        {showClear && (
          <button
            className="btn btn-secondary btn-block my-2"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;

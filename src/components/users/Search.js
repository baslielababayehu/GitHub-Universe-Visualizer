import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const updateValue = (e) => {
    setText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      setText(document.getElementById("search-button").value);
      githubContext.searchUsers(document.getElementById("search-button").value);
    }
  };

  return (
    <div className="px-2">
      <form onSubmit={submit} className="form">
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Search for a GitHub User User"
          id="search-button"
          value={text}
          onChange={updateValue}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block my-2 "
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-secondary btn-block my-2"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

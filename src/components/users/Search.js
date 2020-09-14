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
      <div className="row m-0 p-0">
        <form className="form col-12" id="my-form">
          <div className="row">
            <input
              className="form-control form-control-sm col-10"
              type="text"
              placeholder="Search for a GitHub User User"
              id="search-button"
              value={text}
              onChange={updateValue}
            />

            <a href="#" onClick={submit} className="col-1">
              <i
                className="fa fa-search"
                style={{ fontSize: "2rem", color: "#D88C9A" }}
              ></i>
            </a>
            {githubContext.users.length > 0 && (
              <button
                className="btn col-1"
                style={{ backgroundColor: "#F1E3D3" }}
                onClick={githubContext.clearUsers}
              >
                Clear{" "}
                <i
                  className="fa fa-trash"
                  // style={{ backgroundColor: "white" }}
                ></i>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

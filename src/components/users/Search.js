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
  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text === "") {
        alertContext.setAlert("Please enter something", "light");
      } else {
        setText(document.getElementById("search-button").value);
        githubContext.searchUsers(
          document.getElementById("search-button").value
        );
      }
    }
  };

  return (
    <div className="px-2">
      <div className="row m-0 p-0">
        <form className="form col-12" id="my-form">
          <div className="row m-0">
            <input
              className="form-control form-control-sm col-8"
              type="text"
              placeholder="Search User e.g. Taylor Otwell"
              id="search-button"
              value={text}
              onChange={updateValue}
              onKeyDown={onEnter}
            />

            <a href="#" onClick={submit} className="col-auto ">
              <i
                className="fa fa-search"
                style={{ fontSize: "2rem", color: "#D88C9A" }}
              ></i>
            </a>
            {githubContext.users.length > 0 && (
              <button
                className="btn btn-sm text-white col-1  mx-2 p-0"
                style={{ backgroundColor: "#292b2c" }}
                onClick={githubContext.clearUsers}
              >
                <i
                  className="fa fa-times"
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

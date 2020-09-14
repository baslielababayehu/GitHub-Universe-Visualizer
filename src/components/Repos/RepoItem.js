import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const RepoItem = ({ repo }) => {
  useEffect(() => {
    returnLanguages();
    //eslint-disable-next-line
  }, []);

  const returnLanguages = async () => {
    const res = await axios
      .get(repo.languages_url)
      .then((response) => response)
      .catch(function (error) {
        console.log(error);
      });
    console.log(res.data);
  };

  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;

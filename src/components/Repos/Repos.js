import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

export const Repos = () => {
  const githubContext = useContext(GithubContext);
  // console.log(githubContext.repos[0].node_id);

  // return githubContext.repos.map((repo) => (
  //   <RepoItem repo={repo} key={repo.id} />
  // ));

  return null;
};

export default Repos;

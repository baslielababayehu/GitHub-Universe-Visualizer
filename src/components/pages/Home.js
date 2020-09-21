import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/users";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";
import Footer from "../layout/Footer";

export const Home = () => {
  const githubContext = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <div
        className="mt-4"
        style={{ borderTop: "0.1rem solid", minHeight: "80vh" }}
      >
        <div>
          {githubContext.users.length > 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="ml-2 mt-3">Profiles</h2>
            </div>
          ) : (
            console.log("")
          )}
          <Users />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

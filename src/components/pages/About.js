import React from "react";
import Footer from "../layout/Footer";

export const About = () => {
  return (
    <div>
      <div style={{ height: "80vh" }}>
        <h1>About this app</h1>
        <p>
          Uses the GitHub API to display insights regarding a specified user
          such as most popular repositories, number of followers etc.
        </p>

        <p>
          For more information, check out the github Repo at{" "}
          <a href="https://github.com/baslielababayehu/GitHub-Universe-Visualizer"></a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;

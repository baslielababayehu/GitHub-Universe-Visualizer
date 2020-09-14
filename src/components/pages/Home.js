import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/users";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTooltip,
  VictoryPie,
} from "victory";

export const Home = () => {
  const githubContext = useContext(GithubContext);

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <Fragment>
      <VictoryPie
        style={{ labels: { fill: "white" } }}
        innerRadius={110}
        labelRadius={120}
        labels={({ datum }) => `# ${datum.y}`}
        data={[
          { x: 1, y: 55 },
          { x: 2, y: 1 },
          { x: 3, y: 5 },
          { x: 4, y: 5 },
          { x: 5, y: 5 },
        ]}
      />

      <Search />
      <div className="mt-4" style={{ borderTop: "0.1rem solid" }}>
        <div>
          {githubContext.users.length > 0 ? (
            <h2 className="ml-2 mt-3">Profiles</h2>
          ) : (
            console.log("")
          )}
          <Users />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

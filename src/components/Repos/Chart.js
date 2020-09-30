import React from "react";
import { Polar, HorizontalBar, Doughnut } from "react-chartjs-2";

export const MyChart = (props) => {
  const dataStar = {
    datasets: [
      {
        data: props.dataStar,
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#FF634D",
          "#36A2EB",
          "black",
        ],
        label: "Number of Stars", // for legend
      },
    ],
    labels: props.labelRepos,
  };

  const dataFork = {
    datasets: [
      {
        data: props.dataFork,
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#FF634D",
          "#36A2EB",
          "black",
        ],
        label: "Number of Forks", // for legend
      },
    ],
    labels: props.labelRepos,
  };

  const dataLanguage = {
    datasets: [
      {
        data: props.dataLanguage,
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#FF634D",
          "#36A2EB",
          "black",
          "#FFA07A",
          "#808000",
          "#008080",
          "#000080",
          "#800080",
        ],
        label: "Language Usage", // for legend
      },
    ],
    labels: props.labelLanguages,
  };

  return (
    <div>
      <h2>Most Used Languages</h2>
      <div className="row m-0">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <Doughnut data={dataLanguage} />
        </div>
        <div className="col-sm-6 col-sm-6 col-xs-12">
          <HorizontalBar data={dataLanguage} />
        </div>
      </div>
      <h2>Recent Repo Star Count</h2>
      <div className="row m-0">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <Polar data={dataStar} />
        </div>
        <div className="col-sm-6 col-sm-6 col-xs-12">
          <HorizontalBar data={dataStar} />
        </div>
      </div>
      <h2 className="mt-4">Recent Repo Fork Count</h2>
      <div className="row m-0">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <Polar data={dataFork} />
        </div>
        <div className="col-sm-6 col-sm-6 col-xs-12">
          <HorizontalBar data={dataFork} />
        </div>
      </div>
    </div>
  );
};

export default MyChart;

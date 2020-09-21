import React, { Component, setState } from "react";
import MyChart from "./Chart";
import axios from "axios";

export default class Visualizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languagesRepo: this.props.repos,
      repo: this.props.repos,
      arrayOfForkCount: [],
      arrayOfStarCount: [],
      arrayOfLanguageCount: [],
      arrayOfRepoName: [],
      visualiseIsClicked: false,
      languageCount: [],
      languageName: [],
    };
  }
  componentDidMount() {
    this.toArray(this.state.repo);
  }

  returnLanguages = async () => {
    const repo = this.props.repos;
    console.log(repo[0].languages_url);
    const res = await axios
      .get(repo[0].languages_url)
      .then((response) => response)
      .catch(function (error) {
        console.log(error);
      });
    // console.log(res.data);
    this.state.languagesRepo = res.data;
    console.log(this.state.languagesRepo);
  };

  toArray = (obj) => {
    const result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
    console.log(result);
    this.state.repo = result;
    return result;
  };

  makeForkArray = () => {
    console.log(this.state.repo[0][1].id);
    let i = 0;
    const arrayOfForkCount = this.state.arrayOfForkCount;
    while (i < 5) {
      arrayOfForkCount.push(this.state.repo[i][1].forks_count);
      i++;
    }
    console.log(arrayOfForkCount);
  };

  makeStarArray = () => {
    console.log(this.state.repo[0][1].id);
    let i = 0;
    const arrayOfStarCount = this.state.arrayOfStarCount;
    while (i < 5) {
      arrayOfStarCount.push(this.state.repo[i][1].stargazers_count);
      i++;
    }
    console.log(arrayOfStarCount);
  };

  makeLanguageArray = () => {
    // console.log(this.state.repo[0][1].language);
    let i = 0;
    const arrayOfLanguageCount = this.state.arrayOfLanguageCount;
    while (i < this.state.repo.length) {
      arrayOfLanguageCount.push(this.state.repo[i][1].language);
      i++;
    }
    console.log(arrayOfLanguageCount.sort());
  };

  // adapted from https://stackoverflow.com/questions/31227687/find-the-most-frequent-item-of-an-array-not-just-strings/
  mostFrequentItem = () => {
    const arr = this.state.arrayOfLanguageCount;
    let a = [],
      b = [],
      prev;

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }

    let x = 0;
    const languageName = this.state.languageName;
    const languageCount = this.state.languageCount;
    while (x < a.length) {
      languageName.push(a[x]);
      languageCount.push(b[x]);
      x++;
    }
    // while (x < 10) {
    //   this.state.languageName.push(a[x]);
    // }
    // console.log(this.state.languageName);
    console.log([a, b]);
  };

  makeRepoArray = () => {
    console.log(this.state.repo[0][1].id);
    let i = 0;
    const arrayOfRepoName = this.state.arrayOfRepoName;
    while (i < 5) {
      arrayOfRepoName.push(this.state.repo[i][1].name);
      i++;
    }
    console.log(arrayOfRepoName);
  };
  changeToArray = () => {
    this.makeForkArray();
    this.makeLanguageArray();
    this.makeStarArray();
    this.makeRepoArray();
    this.mostFrequentItem();
    this.setState({ visualiseIsClicked: true });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-danger btn-block"
          onClick={this.changeToArray}
        >
          Visualize
        </button>
        {this.state.visualiseIsClicked ? (
          <MyChart
            dataStar={this.state.arrayOfStarCount}
            dataFork={this.state.arrayOfForkCount}
            dataLanguage={this.state.languageCount}
            labelRepos={this.state.arrayOfRepoName}
            labelLanguages={this.state.languageName}
          />
        ) : null}
      </div>
    );
  }
}

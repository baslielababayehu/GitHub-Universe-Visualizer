import React, { Component } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcustom from "./components/layout/Navbar";
import Users from "./components/users/users";
import axios from "axios";
// import { UserItem } from "./components/users/UserItem.js";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbarcustom icon="fa fa-github" title="GitHub Insights" />
        <div className=" m-0 p-0 border border-secondary">
          <div className="row border border-secondary">
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

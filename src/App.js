import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcustom from "./components/layout/Navbar";
import Users from "./components/users/users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });
    // const res = await axios.get(
    //   `https://api.github.com/users?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // );
    this.setState({ users: [], loading: false });
  }

  //search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    // console.log(res.data.items);
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    return (
      <div className="App">
        <Navbarcustom icon="fa fa-github" title="GitHub Insights" />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <div className=" m-0 p-0 border ">
          <div className="row border ">
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

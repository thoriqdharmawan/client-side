import React, { Component } from "react";
import App from "./App";

// Redux
import { connect } from "react-redux";
import { userLogin } from "./redux/actions/userActions";

// Pages
import Login from "./pages/Login";

class Routing extends Component {
  state = {
    auth: false
  };

  componentDidMount() {
    // console.log("mapaction : ", .authenticated);
  }

  render() {
    const { authenticated } = this.props.user;
    let page = authenticated ? <App /> : <Login />;
    return <div>{page}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  userLogin
};

export default connect(mapStateToProps, mapActionToProps)(Routing);

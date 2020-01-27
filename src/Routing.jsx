import React, { Component } from "react";
import App from "./App";
import Axios from "axios";

// Redux
import store from "./redux/store";
import { connect } from "react-redux";
import {
  userLogin,
  userLogout,
  getUserData
} from "./redux/actions/userActions";
import { getScreams } from "./redux/actions/dataActions";

// Pages
import Login from "./pages/Login";
import jwtDecode from "jwt-decode";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(userLogout());
  } else {
    Axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
    store.dispatch(getScreams());
    // store.dispatch({ type: SET_AUTHENTICATED });
  }
}

class Routing extends Component {
  state = {
    auth: false
  };

  render() {
    const { authenticated } = this.props.user;
    let page = authenticated ? <App /> : <Login />;
    return <>{page}</>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  userLogin,
  userLogout,
  getUserData,
  getScreams
};

export default connect(mapStateToProps, mapActionToProps)(Routing);

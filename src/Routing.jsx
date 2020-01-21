import React, { Component } from "react";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Login from "./pages/Login";

class Routing extends Component {
  state = {
    auth: true
  };

  render() {
    let page = this.state.auth ? <App /> : <Login />;
    return (
      <div>
        <Provider store={store}>{page}</Provider>
      </div>
    );
  }
}

export default Routing;

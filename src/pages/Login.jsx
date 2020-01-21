import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import FormLogin from "../components-customs/organisms/FormLogin";

import LoginBg from "../assets/img/background/login-bg.jpg";
import Signup from "../components-customs/organisms/FormSignup";

const Login = () => {
  return (
    <Router>
      <div className="login-wrapper">
        <Row>
          <Col className="col-sm p-0" sm="8">
            <img className="login-bg" src={LoginBg} alt="Login" />
          </Col>
          <Col className="col-sm p-0" sm="4">
            <div className="form-login-wrap">
              <Switch>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/">
                  <FormLogin />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default Login;

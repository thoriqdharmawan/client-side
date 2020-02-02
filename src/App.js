import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Row, Col, Container } from "reactstrap";

// // Components
// import Sidebar from "./components/Sidebar/Sidebar";
// import Header from "./components/Headers/Header";
import SideProfile from "./components-customs/organisms/SideProfile";

// Components Custom
import Navbar from "./components/Navbars/Navbar";
import MainContents from "./pages/MainContents";
import SettingAccunt from "./pages/SettingAccunt";
import AllUsers from "./pages/AllUsers";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Row className="row-container ">
          <Col className="bgn-red col-sm " sm="3">
            <SideProfile />
          </Col>
          <Col className="bgn-pink col-sm" sm="7">
            <Switch>
              <Route path="/setting">
                <SettingAccunt />
              </Route>
              <Route path="/users">
                <AllUsers />
              </Route>
              <Route path="/">
                <MainContents />
              </Route>
            </Switch>
          </Col>
          <Col className="bgn-red col-sm" sm="2">
            {/* <SideProfile /> */}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

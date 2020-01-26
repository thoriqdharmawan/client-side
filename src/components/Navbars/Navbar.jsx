import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { userLogout } from "../../redux/actions/userActions";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

const Navbars = params => {
  const handleLogout = () => {
    console.log("logouted");
    params.userLogout();
  };

  return (
    <Navbar
      className="navbar-horizontal navbar-dark bg-primary  mb-3"
      expand="lg"
    >
      <Container>
        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
          Social Media Throiq
        </NavbarBrand>
        <button
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <UncontrolledCollapse navbar toggler="#navbar-info">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={require("../../assets/img/brand/blue.png")}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-info"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink className="nav-link-icon">
                  <i className="fas fa-home" />
                  <span className="nav-link-inner--text">Home</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/users">
                <NavLink className="nav-link-icon">
                  <i className="fas fa-users" />
                  <span className="nav-link-inner--text">Users</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/setting">
                <NavLink className="nav-link-icon">
                  <i className="fas fa-cog" />
                  <span className="nav-link-inner--text">Setings</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink className="nav-link-icon">
                  <div onClick={handleLogout}>
                    <i className="fa fa-sign-out-alt" />
                    <span className="nav-link-inner--text">Logout</span>
                  </div>
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  userLogout
};

export default connect(mapStateToProps, mapActionToProps)(Navbars);

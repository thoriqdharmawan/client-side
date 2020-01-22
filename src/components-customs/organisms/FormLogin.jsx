import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { FormGroup, Form, Input, Button } from "reactstrap";
import ReactLogin from "../../assets/img/theme/react.jpg";

// Redux
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/userActions";

const FormLogin = params => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    params.userLogin(userData, params.history);
  };

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    console.log("userData : ", userData);
  });

  return (
    <>
      <div className="mx-auto">
        <img src={ReactLogin} alt="Logo" />
      </div>
      <Form>
        <FormGroup>
          <small>Email : </small>
          <Input
            name="email"
            autoFocus
            className="form-control-alternative mt-2"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            type="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <small>Password : </small>
          <Input
            name="password"
            className="form-control-alternative mt-2"
            id="exampleFormControlInput1"
            type="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          onClick={handleLogin}
          block
          color="primary mt-5"
          size="lg"
          type="button"
        >
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        Don't have an account ? <Link to="/signup">Signup Here</Link>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {
  userLogin
};

export default connect(mapStateToProps, mapActionToProps)(FormLogin);

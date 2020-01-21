import React from "react";
// import { Card, Container } from "reactstrap";

import { Link } from "react-router-dom";

import { FormGroup, Form, Input, Button } from "reactstrap";
import ReactLogin from "../../assets/img/theme/react.jpg";

const FormLogin = () => {
  return (
    <>
      <div className="mx-auto">
        <img src={ReactLogin} alt="Logo" />
      </div>
      <Form>
        <FormGroup>
          <small>Email : </small>
          <Input
            autoFocus
            className="form-control-alternative mt-2"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <small>Password : </small>
          <Input
            className="form-control-alternative mt-2"
            id="exampleFormControlInput1"
            type="password"
          />
        </FormGroup>
        <Button block color="primary mt-5" size="lg" type="button">
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        Don't have an account ? <Link to="/signup">Signup Here</Link>
      </div>
    </>
  );
};

export default FormLogin;

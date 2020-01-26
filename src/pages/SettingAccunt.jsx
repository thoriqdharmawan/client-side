import React from "react";

import { FormGroup, Input, Button, Row, Col } from "reactstrap";

const SettingAccunt = () => {
  return (
    <div>
      <FormGroup>
        <span>Full Name : </span>
        <Input id="exampleFormControlInput1" placeholder="Nama" type="text" />
      </FormGroup>

      <Row>
        <Col md="6">
          <FormGroup>
            <span>Website : </span>
            <Input
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <span>Email : </span>
            <Input
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              type="email"
              disabled
              value="thoriq@email.com"
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <span>Password : </span>
        <Input placeholder="name@example.com" type="password" />
      </FormGroup>
      <FormGroup>
        <span>Confirm Password : </span>
        <Input placeholder="name@example.com" type="password" />
      </FormGroup>
      <FormGroup>
        <span>Profile : </span>
        <Input placeholder="name@example.com" type="file" />
      </FormGroup>
      <FormGroup>
        <span>Bio : </span>
        <Input placeholder="name@example.com" rows="3" type="textarea" />
      </FormGroup>
      <Button
        className="mt-5"
        block
        color="secondary"
        outline
        size="lg"
        type="button"
      >
        Save Changed
      </Button>
    </div>
  );
};

export default SettingAccunt;

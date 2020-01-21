import React from "react";

import Profile1 from "../../assets/img/theme/team-1-800x800.jpg";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

const SideProfile = () => {
  return (
    <Card className="mb-3">
      <CardImg alt="..." src={Profile1} top />
      <CardBody>
        <CardTitle className="profile-name">Thoriq Dharmawan</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          reiciendis dolorum cumque exceptu
        </CardText>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm">followers</Col>
          <Col className="bgn-red col-sm">Tweets</Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SideProfile;

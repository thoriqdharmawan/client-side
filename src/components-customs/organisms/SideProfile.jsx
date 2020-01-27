import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// import Profile1 from "../../assets/img/theme/team-1-800x800.jpg";
// Redux
import { connect } from "react-redux";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

const SideProfile = ({
  user: {
    credentials: { handle, imageUrl, createdAt, bio, location, website }
  }
}) => {
  dayjs.extend(relativeTime);
  return (
    <Card className="mb-3">
      <CardImg alt="..." src={imageUrl} top />
      <CardBody>
        <CardTitle className="profile-name">{handle}</CardTitle>
        <CardText className="bio-info">{bio}</CardText>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm header-info">Location</Col>
        </Row>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm value-info">{location}</Col>
        </Row>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm header-info">Website</Col>
        </Row>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm value-info">{website}</Col>
        </Row>
        <Row className="row-container text-center">
          <Col className="bgn-red col-sm created-at">
            Created at {dayjs(createdAt).fromNow()}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(SideProfile);

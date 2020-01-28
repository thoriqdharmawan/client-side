import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import DeleteScream from "../atoms/DeleteScream";

import {
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Input
} from "reactstrap";

const Posts = ({
  name,
  key,
  profil,
  createdAt,
  body,
  likeCount,
  commentCount,
  handleLikePost,
  handleCommentPost
}) => {
  dayjs.extend(relativeTime);

  const deleteButton = name == handle ? <DeleteScream screamId={key} /> : null;

  return (
    <div>
      <Card className="mb-3">
        <CardHeader tag="h3">
          <Row>
            <Col className="col-sm" sm="1" xs="2">
              <div className="d-flex align-items-center avatar">
                <img src={profil} alt="profil" />
              </div>
            </Col>
            <Col className="col-sm " sm="11" xs="10">
              <div className=" name overflow-hidden ml-3">
                <h2 className="mb-0 ">{name}</h2>
                <small>{dayjs(createdAt).fromNow()}</small>
              </div>
              {deleteButton}
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <CardText>{body}</CardText>
        </CardBody>
        <CardFooter className="text-muted">
          <Button
            onClick={handleLikePost}
            color="secondary"
            outline
            type="button"
          >
            <i className="fas fa-heart" />
            <span className="ml-2">{likeCount}</span>
            <span className="ml-2">Likes</span>
          </Button>
          <Button
            onClick={handleCommentPost}
            color="secondary"
            outline
            type="button"
          >
            <i className="far fa-comment" />
            <span className="ml-2">{commentCount}</span>
            <span className="ml-2">Comments</span>
          </Button>
        </CardFooter>
        <CardBody>
          <Input type="text" />
          <Button
            onClick={handleCommentPost}
            color="primary"
            type="button"
            className="float-right mt-3"
          >
            <i className="fas fa-comment" />
            <span className="ml-2">Kirim</span>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Posts;

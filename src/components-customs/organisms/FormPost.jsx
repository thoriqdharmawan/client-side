import React, { useState } from "react";

import { Form, Input, Button, Card } from "reactstrap";

// REDUX
import { connect } from "react-redux";
import { postScream } from "../../redux/actions/dataActions";

const FormPost = ({ postScream }) => {
  const [post, setPost] = useState("");

  const handleChange = e => {
    setPost(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("post : ", post);
    const newScream = {
      body: post
    };
    postScream(newScream);
    setPost("");
  };

  return (
    <Card className="p-4 mb-3" color="white">
      <Form>
        <Input
          className="form-control-alternative mb-3"
          placeholder="Write a large text here ..."
          rows="3"
          type="textarea"
          onChange={handleChange}
          value={post}
        />
        <Button
          onClick={handleSubmit}
          className="float-right"
          color="primary"
          type="submit"
        >
          Kirim
        </Button>
      </Form>
    </Card>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { postScream })(FormPost);

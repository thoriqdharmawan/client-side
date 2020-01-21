import React, { useState } from "react";

import { Form, Input, Button, Card } from "reactstrap";

const FormPost = () => {
  const [post, setPost] = useState("");

  const handleChange = e => {
    setPost(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("post : ", post);
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

export default FormPost;

import React from "react";
import { ListGroup } from "reactstrap";

import Users from "../components-customs/organisms/Users";

const AllUsers = () => {
  return (
    <ListGroup flush>
      <Users />
    </ListGroup>
  );
};

export default AllUsers;

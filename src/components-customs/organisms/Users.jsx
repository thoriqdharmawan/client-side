import React from "react";

import { ListGroupItem } from "reactstrap";

const Users = () => {
  return (
    <>
      <ListGroupItem tag="a" href="#">
        <img className="avatar mr-3" alt="profile" /> Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        <img className="avatar mr-3" alt="profile" /> Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        <img className="avatar mr-3" alt="profile" /> Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="a" href="#">
        <img className="avatar mr-3" alt="profile" /> Cras justo odio
      </ListGroupItem>
    </>
  );
};

export default Users;

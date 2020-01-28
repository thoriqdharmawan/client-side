import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";

// import

const DeleteScream = ({ screamId }) => {
  const handleDeleteScream = () => {
    // deleteScream()
    console.log("screamId : ", screamId);
  };

  return (
    <Button
      className="float-right"
      color="secondary"
      outline
      type="button"
      onClick={handleDeleteScream}
    >
      <i className="far fa-trash-alt" />
    </Button>
  );
};

// const mapActionToProps = {
//   deleteScream,
//   getScreams
// }

export default connect(null, null)(DeleteScream);

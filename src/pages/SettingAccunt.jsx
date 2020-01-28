import React from "react";
import { useState } from "react";

import { FormGroup, Input, Button, Row, Col, Spinner } from "reactstrap";

// REDUX
import { connect } from "react-redux";
import { useEffect } from "react";
import { editUserDetails, uploadImage } from "../redux/actions/userActions";

const SettingAccunt = ({
  editUserDetails,
  uploadImage,
  user: {
    credentials: { imageUrl, handle, email, website, bio, location }
  }
}) => {
  const [detail, setDetail] = useState({
    bio: "",
    website: "",
    location: ""
  });

  const mapUserDetailsToState = () => {
    setDetail({
      bio: bio,
      website: website,
      location: location
    });
  };

  useEffect(() => {
    mapUserDetailsToState();
  }, []);

  const handleChange = e => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value
    });
  };

  const handleClickPhoto = () => {
    document.getElementById("photo-profile").click();
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit", detail);
    editUserDetails(detail);
  };

  const handleImageChange = e => {
    let image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    uploadImage(formData);
    console.log("image: ", image);
  };

  return (
    <div>
      <FormGroup>
        <span>Username : </span>
        <Input
          className="disabled"
          disabled
          placeholder="Username"
          type="text"
          value={handle}
        />
      </FormGroup>
      <FormGroup>
        <span>Email : </span>
        <Input
          className="disabled"
          placeholder="name@example.com"
          type="email"
          disabled
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <span>Profile : </span>
        <div className="text-center">
          <img
            width="50%"
            className="mb-3 margin-auto"
            src={imageUrl}
            alt="Photo Profil"
          />
        </div>
        <Button
          onClick={handleClickPhoto}
          block
          color="secondary"
          outline
          size="lg"
          type="button"
        >
          Change Profile
        </Button>
        <Input
          hidden
          onChange={handleImageChange}
          name="image"
          type="file"
          id="photo-profile"
        />
      </FormGroup>
      <Row>
        <Col md="6">
          <FormGroup>
            <span>Website : </span>
            <Input
              type="text"
              onChange={handleChange}
              name="website"
              value={detail.website}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <span>Location : </span>
            <Input
              type="text"
              onChange={handleChange}
              name="location"
              value={detail.location}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <span>Bio : </span>
        <Input
          rows="3"
          type="textarea"
          onChange={handleChange}
          name="bio"
          value={detail.bio}
        />
      </FormGroup>
      <Button
        className="mt-5 mb-5"
        block
        color="secondary"
        outline
        size="lg"
        type="button"
        onClick={handleSubmit}
      >
        Save Changed
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { editUserDetails, uploadImage })(
  SettingAccunt
);

import React, { useEffect } from "react";
import FormPost from "../components-customs/organisms/FormPost";
import Posts from "../components-customs/organisms/Posts";

// REDUX
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

const MainContents = ({ getScreams, data }) => {
  useEffect(() => {
    getScreams();
    console.log("Data posts : ", data);
  }, []);

  return (
    <>
      <FormPost />
      <Posts
        name="Thoriq Dharmawan"
        profil="https://firebasestorage.googleapis.com/v0/b/socialmediathoriq.appspot.com/o/25530256740.jpg?alt=media"
        createdAt="3 Januari 2010"
        body="loremipsum"
        likeCount="20"
        commentCount="310"
        handleDeletePost={() => console.log("Deletedd new")}
        handleLikePost={() => console.log("liked new")}
        handleCommentPost={() => console.log("Commentd new")}
      />

      <Posts
        name="Habib Rafi'i"
        profil="https://firebasestorage.googleapis.com/v0/b/socialmediathoriq.appspot.com/o/25530256740.jpg?alt=media"
        createdAt="3 Februari 2010"
        body="loremipsasdas asd asd as asdasum"
        likeCount="21"
        commentCount="10"
        handleDeletePost={() => console.log("Deletedd new2")}
        handleLikePost={() => console.log("liked new2")}
        handleCommentPost={() => console.log("Commentd new2")}
      />
      <Posts
        name="Dewi Rani"
        profil="https://firebasestorage.googleapis.com/v0/b/socialmediathoriq.appspot.com/o/25530256740.jpg?alt=media"
        createdAt="3 Desemberd 2010"
        body="loremias asdas dasdasd psum"
        likeCount="200"
        commentCount="1"
        handleDeletePost={() => console.log("Deletedd new3")}
        handleLikePost={() => console.log("liked new3")}
        handleCommentPost={() => console.log("Commentd new3")}
      />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

const mapActionToProps = {
  getScreams
};

export default connect(mapStateToProps, mapActionToProps)(MainContents);

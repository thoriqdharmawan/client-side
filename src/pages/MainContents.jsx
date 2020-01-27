import React, { Component } from "react";
import FormPost from "../components-customs/organisms/FormPost";
import Posts from "../components-customs/organisms/Posts";

// REDUX
import { connect } from "react-redux";

class MainContents extends Component {
  render() {
    const { screams } = this.props.data;
    let recentScreamMarkup = screams.map(scream => (
      <Posts
        key={scream.screamId}
        name={scream.userHandle}
        profil={scream.userImage}
        createdAt={scream.createdAt}
        body={scream.body}
        likeCount={scream.likeCount}
        commentCount={scream.commentCount}
        handleDeletePost={() => console.log("Deletedd new")}
        handleLikePost={() => console.log("liked new")}
        handleCommentPost={() => console.log("Commentd new")}
      />
    ));

    return (
      <>
        <FormPost />
        {recentScreamMarkup}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

export default connect(mapStateToProps, null)(MainContents);

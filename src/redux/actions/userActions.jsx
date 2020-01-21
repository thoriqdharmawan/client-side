import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";
import axios from "axios";

export const userLogin = (userData, history) => dispatch => {
  axios
    .post("/login", userData)
    .then(res => {
      dispatch({ type: SET_AUTHENTICATED });
      history.push("/");
    })
    .catch(err => {
      console.log("error : ", err);
    });
};

export const userLogout = () => dispatch => {
  dispatch({ type: SET_UNAUTHENTICATED });
  // axios
  //   .post("/logout", userData)
  //   .then(res => {
  //     dispatch({ type: SET_AUTHENTICATED });
  //     history.push("/");
  //   })
  //   .catch(err => {
  //     console.log("error : ", err);
  //   });
};

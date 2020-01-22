import { SET_LOADING, SET_ERROR } from "../types";

const initialUserState = {
  loading: false,
  error: {
    password: "",
    email: "",
    handle: " "
  }
};

export default function(state = initialUserState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

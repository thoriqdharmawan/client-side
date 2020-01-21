import { SET_POST } from "../types";

const initialState = {
  posts: [],
  likes: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: "PLUS 1"
      };
    default:
      return initialState;
  }
}

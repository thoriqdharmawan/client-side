import { SET_SCREAMS, LOADING_DATA, POST_SCREAM } from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams]
      };
    default:
      return initialState;
  }
}

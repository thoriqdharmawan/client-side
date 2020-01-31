import {
  SET_SCREAMS,
  LOADING_DATA,
  POST_SCREAM,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM
} from "../types";

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
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      return {
        ...state
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        scream => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state
      };
    default:
      return initialState;
  }
}

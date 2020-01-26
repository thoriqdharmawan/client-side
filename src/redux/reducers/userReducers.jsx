import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER
} from "../types";

const initialUserState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

export default function(state = initialUserState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_UNAUTHENTICATED:
      return initialUserState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}

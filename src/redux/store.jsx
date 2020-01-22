import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducers from "./reducers/userReducers";
import dataReducers from "./reducers/dataReducers";
import uiReducers from "./reducers/uiReducers";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducers,
  data: dataReducers,
  ui: uiReducers
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

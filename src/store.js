import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./reducer/app";
import { articlesReducer } from "./reducer/articles";

const reducer = combineReducers({
  app: appReducer,
  articles: articlesReducer,
});

/* eslint-disable */
const store = createStore(reducer, applyMiddleware(thunk));
/* eslint-enable */

export default store;

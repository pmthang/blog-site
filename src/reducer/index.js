import articles from "./articles";
import home from "./home";
import auth from "./auth";
import app from "./app";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const reducer = combineReducers({
  app,
  auth,
  home,
  articles,
  router: routerReducer,
});
export default reducer;

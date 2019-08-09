import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
);
export default store;

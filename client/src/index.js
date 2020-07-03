import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

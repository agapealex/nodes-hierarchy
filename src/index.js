import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

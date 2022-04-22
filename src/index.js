import React from "react";
import ReactDOM from "react-dom";
import getFireStoreApp from "./services/firebase/config";
import { BrowserRouter } from "react-router-dom";
import aos from "aos";
import App from "./App";
import "./index.css";
import 'aos/dist/aos.css';

aos.init();
getFireStoreApp()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

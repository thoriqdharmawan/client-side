import React from "react";
import ReactDOM from "react-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

// import App from "./App";
import Routing from "./Routing";

ReactDOM.render(<Routing />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import './styles/main.less';
import App from './App.jsx';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.getElementById("main")
);
import React from "react";
import ReactDOM from "react-dom";

import './main.less';
import App from './components/App.jsx';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.getElementById("main")
);
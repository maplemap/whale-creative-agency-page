import React from "react";
import ReactDOM from "react-dom";
import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "neal-react";
import SamplePage from './sample-page.jsx';
import '../node_modules/neal-react/css/base.scss';

ReactDOM.render((
    <App>
        <SamplePage />
    </App>
), document.getElementById("main"));
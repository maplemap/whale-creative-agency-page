import React from "react";
import './App.less';

import Header from './components/Header.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Team from './components/Team/Team.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer.jsx';

import projects from './config/projects.json';
import config from './config';

class App extends React.Component {
    state = {
        projects: projects,
        colorScheme: 'black',
        sloganName: config.section.presentation.slogan
    };

    handlerChangeSection = (section) => {
        let colorScheme;

        switch (section) {
            case "presentation":
            case "what-we-do":
            case "footer":
                colorScheme = 'black';

                break;
            case "team":
            case "portfolio":
                colorScheme = 'white';

                break;
        }

        this.setState({
            colorScheme: colorScheme,
            sloganName: config.section[section].slogan
        });
    };


    render(){
        return(
            <div className="App">
                <Header
                    colorScheme={this.state.colorScheme}
                    sloganName={this.state.sloganName}
                />
                <Presentation
                    onChangeSection={this.handlerChangeSection}
                />
                <Team
                    onChangeSection={this.handlerChangeSection}
                />
                <WhatWeDo
                    onChangeSection={this.handlerChangeSection}
                />
                <Portfolio
                    projects={this.state.projects}
                    categoryDescription={config.section.portfolio.description}
                    onChangeSection={this.handlerChangeSection}
                />
                <Footer
                    onChangeSection={this.handlerChangeSection}
                />
            </div>
        )
    }
}

export default App;

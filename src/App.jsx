import React from "react";
import './App.less';

import Header from './components/Header.jsx';
import Presentation from './components/Presentation.jsx';
import Team from './components/Team.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer.jsx';

import projects from './data/projects.json';
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
                colorScheme = 'black';

                break;
            case "team":
                colorScheme = 'white';

                break;
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
                    colorScheme={this.state.colorScheme}
                    onChangeSection={this.handlerChangeSection}
                />
                <Team
                    colorScheme={this.state.colorScheme}
                    onChangeSection={this.handlerChangeSection}
                />
                <Portfolio
                    projects={this.state.projects}
                    colorScheme={this.state.colorScheme}
                    onChangeSection={this.handlerChangeSection}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
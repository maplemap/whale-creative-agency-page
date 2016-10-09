import React from "react";
import './App.less';

import Header from './components/Header.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Team from './components/Team/Team.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import NavigationPopup from './components/Popups/NavigationPopup.jsx';

import projects from './config/projects.json';
import config from './config';

class App extends React.Component {
    state = {
        projects: projects,
        colorScheme: 'black',
        sloganName: config.section.presentation.slogan,
        isNavigationMenuActive: false
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
    }

    handlerShowMenuNavigation = () => {
        this.setState({
            isNavigationMenuActive: true
        })
    }
    handlerHideMenuNavigation = () => {
        this.setState({
            isNavigationMenuActive: false
        })
    }


    render(){
        return(
            <div id="appSection" className="App">
                <Header
                    colorScheme={this.state.colorScheme}
                    sloganName={this.state.sloganName}
                    isNavigationMenuActive={this.state.isNavigationMenuActive}
                    handlerShowMenuNavigation={this.handlerShowMenuNavigation}
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

                <NavigationPopup
                    handlerHideMenuNavigation={this.handlerHideMenuNavigation}
                    isNavigationMenuActive = {this.state.isNavigationMenuActive}
                 />
            </div>
        )
    }
}

export default App;

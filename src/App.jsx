import React from "react";
import './App.less';

import Header from './components/Header.jsx';
import Presentation from './components/Presentation.jsx';
import Team from './components/Team.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

import projects from './data/projects.json';

class App extends React.Component {
    state = {
        projects: projects
    };
    
    render(){
        return(
            <div className="App">
                <Header />
                <Presentation />
                <Team />
                <Portfolio projects={this.state.projects}/>
            </div>
        )
    }
}

export default App;
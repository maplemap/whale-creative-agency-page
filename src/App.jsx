import React from "react";
import './App.less';

import Header from './components/Header.jsx';
import Presentation from './components/Presentation.jsx';
import Team from './components/Team.jsx';

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Presentation />
                <Team />
            </div>
        )
    }
}

export default App;
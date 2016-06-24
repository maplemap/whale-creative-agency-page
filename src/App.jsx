import React from "react";
import './App.less';

import Presentation from './components/Presentation.jsx';
import Header from './components/Header.jsx';

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Presentation />
            </div>
        )
    }
}

export default App;
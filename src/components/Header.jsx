import React from "react";
import Navigation from './Navigation.jsx';
import './Header.less';

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <div className="header__body">
                    <h1>
                        <a href="#" className="logo logo--header logo--white">
                            Whale<span className="logo__star">*</span><br/> Creative<br/> Agency
                        </a>
                    </h1>
                    <div className="section-name section-name--white">full-stack<br /> design services</div>
                    <Navigation />
                </div>
            </header>
        )
    }
}

export default Header;
import React from "react";
import './Header.less';

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <div className="header__body">
                    <a href="#" className="logo logo--header">
                        <span className="logo__star">Whale</span><br/> Creative<br/> Agency
                    </a>
                    <div className="team-position  team-position--header">full-stack<br /> design services</div>
                    <nav className="navigation" />
                </div>
            </header>
        )
    }
}

export default Header;
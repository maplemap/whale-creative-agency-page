import React from "react";
import './Header.less';

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <div className="header__body">
                    <a href="#" className="logo logo--header">
                        Whale<span className="logo__star">*</span><br/> Creative<br/> Agency
                    </a>
                    <div className="team-position  team-position--header">full-stack<br /> design services</div>
                    <nav className="navigation" />
                </div>
            </header>
        )
    }
}

export default Header;
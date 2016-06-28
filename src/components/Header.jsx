import React from "react";
import './Header.less';

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <div className="header__body">
                    <h1>
                        <a href="#" className="logo logo--header">
                            Whale<span className="logo__star">*</span><br/> Creative<br/> Agency
                        </a>
                    </h1>
                    <div className="section-name">full-stack<br /> design services</div>
                    <nav className="navigation" />
                </div>
            </header>
        )
    }
}

export default Header;
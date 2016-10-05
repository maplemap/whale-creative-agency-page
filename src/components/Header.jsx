import React from "react";
import Navigation from './Navigation.jsx';
import './Header.less';

const nl2br = require('react-nl2br');

class Header extends React.Component{
    render() {
        const modifier = (this.props.colorScheme === 'white') ? '--white' : '';

        return (
            <header className="header">
                <div className="header__body">
                    <h1>
                        <a href="#" className={`logo logo--header ${(modifier) ? 'logo' + modifier : ''}`}>
                            Whale<span className="logo__star">*</span><br/> Creative<br/> Agency
                        </a>
                    </h1>
                    <div
                        className={`section-slogan ${(modifier) ? 'section-slogan' + modifier : ''}`}
                    >
                        { nl2br(this.props.sloganName) }
                    </div>
                    <Navigation
                        colorScheme={this.props.colorScheme}
                        isNavigationMenuActive={this.props.isNavigationMenuActive}
                        handlerShowMenuNavigation={this.props.handlerShowMenuNavigation}
                    />
                </div>
            </header>
        )
    }
}

export default Header;

import React from "react";
import Navigation from './Navigation.jsx';
import './Header.less';

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
                        {this.props.sloganName}
                    </div>
                    <Navigation colorScheme={this.props.colorScheme} />
                </div>
            </header>
        )
    }
}

export default Header;
// full-stack<br /> design services
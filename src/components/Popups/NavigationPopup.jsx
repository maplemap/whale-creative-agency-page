import React from "react";
import Menu from '../Menu.jsx';

class NavigationPopup extends React.Component {
    render() {
        return (
            <div
                className={`popup popup--navigation ${(this.props.isNavigationPopupActive) ? 'popup--show': ''}`}
            >
                <span
                    className="close-btn close-btn--navigation"
                    onClick={this.props.handlerHideMenuNavigation}
                />
                <div className="popup__wrapper">
                    <div className="lead-header lead-header--navigation">
                        imagination <br/> is the <span className="lead-header__underline">only</span> limit.
                    </div>
                    <Menu className="branches branches--navigation" />
                    <div className="navigation__sign">*M ENU</div>
                </div>
            </div>
        )
    }
}

export default NavigationPopup;

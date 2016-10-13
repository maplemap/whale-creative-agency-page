import React from "react";

class GotProjectPopup extends React.Component {

    render() {
        return (
            <div
                className={`popup popup--what-we-do ${(this.props.isPopupActive) ? 'popup--show': ''}`}
            >
                <span
                    className="close-btn close-btn--what-we-do"
                    onClick={this.props.handlerClosePopup}
                />
                <div className="popup__wrapper">
                    <h2 className="lead-header lead-header--what-we-do">
                        got a <br/> project?
                    </h2>
                    <ul className="contacts contacts--what-we-do">
                        <li className="contacts__email">
                            <a href="mailto:order@whaledesign.me">order@whaledesign.me</a>
                        </li>
                        <li className="contacts__skype">
                        <a href="skype:whaledesign?call">whaledesign</a></li>
                    </ul>
                    <div className="what-we-do__or">
                        <span className="what-we-do__or-text">or</span>
                        <a href="#" className="what-we-do__breaf-link">fill out a brief</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default GotProjectPopup;

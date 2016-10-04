import React from "react";
import GuidLines from './GuidLines.jsx';
import Waypoint from 'react-waypoint';

import './WhatWeDo.less';


class WhatWeDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupActive: false
        }
    }

    handlerCallWhatWeDo = () => {
        this.setState({
            isPopupActive: true
        });
    }

    handlerClosePopup = () => {
        this.setState({
            isPopupActive: false
        });
    }

    render() {
        return(
            <section className="section what-we-do">
                <div className="what-we-do__body">
                    <div className="page page--what-we-do">
                        <div className="page__body">
                            <h2 className="lead-header lead-header--what-we-do">
                                <i>*</i>whale done <br/> design services
                            </h2>
                            <div className="page__text">Full stack design services for your company or product.</div>
                            <div className="page__content">
                                <div className="menu menu--what-we-do">
                                    <div className="menu__item">
                                        <div className="menu__head menu__head--web">Web</div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">corporate website</div>
                                            <div className="menu__point-description">for you and your company </div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">landing pages</div>
                                            <div className="menu__point-description">promote your startup or     product with unique design</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">shop</div>
                                            <div className="menu__point-description">increase your sales by showing them in a beautiful way</div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head menu__head--mobile">Mobile</div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">UI / UX</div>
                                            <div className="menu__point-description">optimising your app for being easy to use and stunning looking</div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head menu__head--promo">Promo</div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">social network graphics</div>
                                            <div className="menu__point-description">banners and ather content you need</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">advertisement</div>
                                            <div className="menu__point-description">social / political promotional ads</div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head menu__head--branding">Branding</div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">logo / mark or corporate identity</div>
                                            <div className="menu__point-description">you company deserves a unique brand</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">brandbook and assets</div>
                                            <div className="menu__point-description">colour scheme business cards and all the props yu need</div>
                                        </div>
                                    </div>
                                    <div className="menu__item">
                                        <div className="menu__head menu__head--graphic">Graphic</div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">posters</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">prospects & brochures</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">presentations</div>
                                            <div className="menu__point-description">pdf / powerpoint keynote</div>
                                        </div>
                                        <div className="menu__point">
                                            <div className="menu__point-name">illustration</div>
                                        </div>
                                </div>
                                <div
                                    className="call call--what-we-do"
                                    onClick={this.handlerCallWhatWeDo}
                                >let’s make <br/> something <br/> stunning <br/> together
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`popup ${(this.state.isPopupActive) ? 'popup--show': ''}`}>
                    <span
                        className="close-btn close-btn--what-we-do"
                        onClick={this.handlerClosePopup}
                    ></span>
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

                <GuidLines/>
                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'what-we-do')} />
                </div>
            </section>

        )
    }
}

export default WhatWeDo;

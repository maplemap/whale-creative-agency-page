import React from "react";
import GuidLines from './GuidLines.jsx';
import Waypoint from 'react-waypoint';

import './WhatWedo.less';


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
                    <h2 className="lead-header lead-header--what-we-do">
                        <i>*</i>whale done <br/> design services
                    </h2>
                    <div className="what-we-do__text">Full stack design services for your company or product.</div>
                    <div className="what-we-do__content">
                        <div className="branches branches--what-we-do">
                            <div className="branches__item">
                                <div className="branches__head branches__head--web">Web</div>
                                <div className="branches__point">
                                    <div className="branches__point-name">corporate website</div>
                                    <div className="branches__point-description">for you and your company </div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">landing pages</div>
                                    <div className="branches__point-description">promote your startup or     product with unique design</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">shop</div>
                                    <div className="branches__point-description">increase your sales by showing them in a beautiful way</div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head branches__head--mobile">Mobile</div>
                                <div className="branches__point">
                                    <div className="branches__point-name">UI / UX</div>
                                    <div className="branches__point-description">optimising your app for being easy to use and stunning looking</div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head branches__head--promo">Promo</div>
                                <div className="branches__point">
                                    <div className="branches__point-name">social network graphics</div>
                                    <div className="branches__point-description">banners and ather content you need</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">advertisement</div>
                                    <div className="branches__point-description">social / political promotional ads</div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head branches__head--branding">Branding</div>
                                <div className="branches__point">
                                    <div className="branches__point-name">logo / mark or corporate identity</div>
                                    <div className="branches__point-description">you company deserves a unique brand</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">brandbook and assets</div>
                                    <div className="branches__point-description">colour scheme business cards and all the props yu need</div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head branches__head--graphic">Graphic</div>
                                <div className="branches__point">
                                    <div className="branches__point-name">posters</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">prospects & brochures</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">presentations</div>
                                    <div className="branches__point-description">pdf / powerpoint keynote</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name">illustration</div>
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
                <div className={`popup what-we-do__got-a-project ${(this.state.isPopupActive) ? 'popup--show': ''}`}>
                    <span
                        className="close-btn close-btn--what-we-do"
                        onClick={this.handlerClosePopup}
                    ></span>
                    <div className="what-we-do__got-a-project-wrapper">
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

                <GuidLines colorScheme={this.props.colorScheme} />
                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'what-we-do')} />
                </div>
            </section>

        )
    }
}

export default WhatWeDo;

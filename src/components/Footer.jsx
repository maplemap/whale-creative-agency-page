import React from "react";
import GuidLines from './GuidLines.jsx';
import Waypoint from 'react-waypoint';

import './Footer.less';

class Footer extends React.Component {
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

        return (
            <section className="section footer">
                <div className="footer__body">
                    <div className="page page--footer">
                        <div className="page__body">
                            <h2 className="lead-header lead-header--footer">
                                imagination <br/> is the <span className="lead-header__underline">only</span> limit.
                            </h2>
                            <div className="page__content">
                                <div className="branches branches--footer">
                                    <div className="branches__item">
                                        <div className="branches__head branches__head--marked">About us</div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">our team</a></div>
                                            <div className="branches__point-description">our story in faces</div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">our vision</a></div>
                                            <div className="branches__point-description">why/how we are doing design</div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">our process</a></div>
                                            <div className="branches__point-description">how the magic happens</div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">blog</a></div>
                                        </div>
                                    </div>
                                    <div className="branches__item">
                                        <div className="branches__head"><a href="#">Our work</a></div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">web sites</a></div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">branding</a></div>
                                            <div className="branches__point-description">brand is not just a logo</div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">mobile apps</a></div>
                                            <div className="branches__point-description">ios / android</div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">graphic design</a></div>
                                        </div>
                                    </div>
                                    <div className="branches__item">
                                        <div className="branches__head branches__head--branding">Agency</div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">download our presentation</a></div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-description">or<br/></div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name"><a href="#">fill the brief</a></div>
                                            <div className="branches__point-description">let’s make something awesome together</div>
                                        </div>
                                    </div>
                                    <div className="branches__item">
                                        <div className="branches__head">Contacts</div>
                                        <div className="branches__point">
                                            <div className="branches__point-name">email</div>
                                            <div className="branches__point-description"><a href="mailto:sales@whaledesign.me">sales@whaledesign.me</a></div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name">skype</div>
                                            <div className="branches__point-description"><a href="skype:whaledesign?call">whaledesign.me</a></div>
                                        </div>
                                        <div className="branches__point">
                                            <div className="branches__point-name">phone</div>
                                            <div className="branches__point-description">+38 (097) 789 08 00</div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="socials socials--footer">
                                    <li className="socials__cell">
                                        <a className="socials__linkedin" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__behance" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__dribble" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__instagram" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__soundcloud" href="#"></a>
                                    </li>
                                </ul>
                                <div className="footer__follow" >#followthewhale</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__since">
                    <span>since</span>
                    <span>2016</span>
                </div>
                <div className={`popup popup--footer ${(this.state.isPopupActive) ? 'popup--show': ''}`}>
                    <span
                        className="close-btn close-btn--footer"
                        onClick={this.handlerClosePopup}
                    ></span>
                    <div className="popup__wrapper">
                        <div className="lead-header lead-header--footer">
                            imagination <br/> is the <span className="lead-header__underline">only</span> limit.
                        </div>
                        <div className="branches branches--footer">
                            <div className="branches__item">
                                <div className="branches__head branches__head--marked branches__head--marked-white">About us</div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">our team</a></div>
                                    <div className="branches__point-description">our story in faces</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">our vision</a></div>
                                    <div className="branches__point-description">why/how we are doing design</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">our process</a></div>
                                    <div className="branches__point-description">how the magic happens</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">blog</a></div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head"><a href="#">Our work</a></div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">web sites</a></div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">branding</a></div>
                                    <div className="branches__point-description">brand is not just a logo</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">mobile apps</a></div>
                                    <div className="branches__point-description">ios / android</div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">graphic design</a></div>
                                </div>
                            </div>
                            <div className="branches__item">
                                <div className="branches__head branches__head--branding">Agency</div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">download our presentation</a></div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-description">or<br/></div>
                                </div>
                                <div className="branches__point">
                                    <div className="branches__point-name"><a href="#">fill the brief</a></div>
                                    <div className="branches__point-description">let’s make something awesome together</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__menu-sign">*M ENU</div>
                    </div>
                </div>

                <GuidLines/>
                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'footer')} />
                </div>
            </section>
        )
    }
}

export default Footer;

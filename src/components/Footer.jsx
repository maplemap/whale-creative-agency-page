import React from "react";
import './Footer.less';

import config from '../config';

class Footer extends React.Component {

    render() {

        return (
            <footer className="footer">
                <div className="footer__body">
                    <ul className="copyright copyright--footer">
                        <span className="copyright__company"><i>©</i> whaledesign.me</span>
                        <span className="copyright__place">2016 Ukraine</span>
                    </ul>
                    <div className="footer__social-links">
                        <div className="footer__follow">
                            #followthewhale
                        </div>
                        <ul className="socials socials--footer">
                            {
                                config.socials.map((social, index) =>
                                    <li
                                        key={social.id}
                                        className="socials__cell"
                                    >
                                        <a
                                            className={`socials__${social.name}`}
                                            href={social.link}
                                        />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

// <a href="#" className="logo logo--header logo--white logo-footer">
//     Whale<span className="logo__star">*</span><br/> Creative<br/> Agency
// </a>

// <ul className="contacts contacts-footer">
//     <li className="contacts__skype">skype us</li>
//     <li className="contacts__brief">fill out a brief</li>
//     <li className="contacts__brief">fill out a brief</li>
//     <li className="contacts__presentation">download presentation</li>
//     <li className="contacts__email">email us</li>
// </ul>
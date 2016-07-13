import React from "react";
import './Footer.less';

import config from '../config';

class Footer extends React.Component {

    render() {

        return (
            <footer className="footer">
                <div className="footer__body">
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
                    <ul className="copyright copyright--footer">
                        <li className="copyright__company"><i>©</i> whaledesign.me</li>
                        <li className="copyright__place">2016 Ukraine</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;
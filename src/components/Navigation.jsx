import React from "react";
import classNames from 'classnames';
import './Navigation.less';

class Navigation extends React.Component{
    static defaultProps = {
        spanAmount: [1, 2, 3, 4]
    }

    constructor(props) {
        super(props);

        this.state = {
            isNavigationActive: false
        }
    }

    handlerShowNavigation = (e) => {
        const isHasOpenClassName = e.target.classList.contains('navigation__icon--open');

        this.setState({
            isNavigationActive: !isHasOpenClassName
        })
    }

    render() {
        const navIconColorModifier = (this.props.colorScheme === 'white');
        const navIconClassNames = classNames('navigation__icon', {
            'navigation__icon--white': navIconColorModifier
        }, {
            'navigation__icon--open navigation__icon--white': this.state.isNavigationActive
        })

        return (
            <nav className="navigation">
                <div
                    className={navIconClassNames}
                    onClick={this.handlerShowNavigation}
                >
                    { this.props.spanAmount.map((num, index) => {
                        return <span key={index} />
                    })}
                </div>

                <div className={`popup popup--navigation ${(this.state.isNavigationActive) ? 'popup--show': ''}`}>
                    <div className="popup__wrapper">
                        <div className="lead-header lead-header--footer">
                            imagination <br/> is the <span className="lead-header__underline">only</span> limit.
                        </div>
                        <div className="menu menu--navigation">
                            <div className="menu__item">
                                <div className="menu__head menu__head--marked menu__head--marked-white">About us</div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">our team</a></div>
                                    <div className="menu__point-description">our story in faces</div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">our vision</a></div>
                                    <div className="menu__point-description">why/how we are doing design</div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">our process</a></div>
                                    <div className="menu__point-description">how the magic happens</div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">blog</a></div>
                                </div>
                            </div>
                            <div className="menu__item">
                                <div className="menu__head"><a href="#">Our work</a></div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">web sites</a></div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">branding</a></div>
                                    <div className="menu__point-description">brand is not just a logo</div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">mobile apps</a></div>
                                    <div className="menu__point-description">ios / android</div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">graphic design</a></div>
                                </div>
                            </div>
                            <div className="menu__item">
                                <div className="menu__head menu__head--branding">Agency</div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">download our presentation</a></div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-description">or<br/></div>
                                </div>
                                <div className="menu__point">
                                    <div className="menu__point-name"><a href="#">fill the brief</a></div>
                                    <div className="menu__point-description">let’s make something awesome together</div>
                                </div>
                            </div>
                        </div>
                        <div className="navigation__menu-sign">*M ENU</div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;

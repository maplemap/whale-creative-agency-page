import React from "react";
import classNames from 'classnames';
import './Navigation.less';

import Menu from './Menu.jsx';

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
        const isHasOpenClassName = e.currentTarget.classList.contains('navigation__icon--open');

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
                        <Menu className="branches branches--navigation" />
                        <div className="navigation__sign">*M ENU</div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;

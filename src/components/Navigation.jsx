import React from "react";
import classNames from 'classnames';
import './Navigation.less';

class Navigation extends React.Component{
    static defaultProps = {
        spanAmount: [1, 2, 3, 4]
    }

    render() {
        const navIconColorModifier = (this.props.colorScheme === 'white');
        const navIconClassNames = classNames('navigation__icon', {
            'navigation__icon--white': navIconColorModifier
        }, {
            'navigation__icon--open': this.props.isNavigationMenuActive
        })

        return (
            <nav className="navigation">
                <div
                    className={navIconClassNames}
                    onClick={this.props.handlerShowMenuNavigation}
                >
                    { this.props.spanAmount.map((num, index) => {
                        return <span key={index} />
                    })}
                </div>
            </nav>
        )
    }
}

export default Navigation;

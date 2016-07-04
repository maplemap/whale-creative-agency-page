import React from "react";
import './Navigation.less';

class Navigation extends React.Component{
    static defaultProps = {
        spanAmount: [1, 2, 3, 4]
    };

    render() {
        const modifier = (this.props.colorScheme === 'white') ? '--white' : '';

        return (
            <nav className="navigation">
                <div
                    className={`navigation__icon ${(modifier) ? 'navigation__icon' + modifier : ''}`}
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
import React from "react";
import './Navigation.less';

class Navigation extends React.Component{
    static defaultProps = {
        spanAmount: [1, 2, 3, 4]
    };

    render() {
        return (
            <nav className="navigation">
                <div className="navigation__icon navigation__icon--white">
                    { this.props.spanAmount.map((num, index) => {
                        return <span key={index} />
                    })}
                </div>
            </nav>
        )
    }
}

export default Navigation;
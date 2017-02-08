import React from "react";
import './GuidLines.less';

import classNames from 'classnames';

class GuidLines extends React.Component {
    static defaultProps = {
        lines: [1, 2, 3, 4, 5, 6]
    };

    render() {
        const disableLines = this.props.disableLines;

        const guidClassConditions = {
            "guid-lines--white": (this.props.colorScheme === 'white')
        };
        const guidClass = classNames("guid-lines", guidClassConditions);

        return (
            <div className={ guidClass }>
                { this.props.lines.map((num, index) => {
                    const spanClassConditions = {
                      hidden: ( disableLines && disableLines.indexOf(num) + 1 )
                    };
                    const spanClass = classNames(`guid-lines__${num}`, spanClassConditions);

                    return <span
                                key={index}
                                className={spanClass}
                           />
                })}
            </div>
        )
    }
}

export default GuidLines;
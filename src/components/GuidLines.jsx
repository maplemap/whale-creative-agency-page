import React from "react";
import './GuidLines.less';

class GuidLines extends React.Component {
    static defaultProps = {
        lines: [1, 2, 3, 4, 5, 6]
    };

    render() {

        return (
            <div className="guid-lines guid-lines--white">
                { this.props.lines.map((num, index) => {
                    const spanClass = 'guid-lines__' + num;

                    return <span key={index} className={spanClass} />
                })}
            </div>
        )
    }
}

export default GuidLines;
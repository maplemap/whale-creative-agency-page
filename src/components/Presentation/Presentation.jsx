import React from "react";
import GuidLines from '../GuidLines.jsx';
import Slider from './PresentationSlider.jsx';
import Waypoint from 'react-waypoint';

import './Presentation.less';

class Presentation extends React.Component {
    render() {
        return(
            <section id="presentation" className="section presentation">
                <Slider />

                <GuidLines />

                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'presentation')} />
                </div>
            </section>

        )
    }
}

export default Presentation;

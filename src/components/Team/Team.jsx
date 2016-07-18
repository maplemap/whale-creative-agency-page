import React from "react";
import GuidLines from '../GuidLines.jsx';
import Slider from './TeamSlider.jsx';
import Waypoint from 'react-waypoint';

var Scroll  = require('react-scroll');
var Element       = Scroll.Element;

import './Team.less';


class Team extends React.Component {

    render() {
        return(
            <section className="section team">
                <Element name="team" />
                <Slider />
                <GuidLines colorScheme={this.props.colorScheme} />

                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'team')} />
                </div>
            </section>

        )
    }
}

export default Team;
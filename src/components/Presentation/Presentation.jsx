import React from "react";
import GuidLines from '../GuidLines.jsx';
import Slider from './PresentationSlider.jsx';
import Waypoint from 'react-waypoint';

var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
var Events     = Scroll.Events;

import './Presentation.less';

class Presentation extends React.Component {
    render() {
        return(
            <section className="section presentation">
                <Slider />

                <Link
                    className="presentation__more-btn"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    More
                </Link>
                <GuidLines colorScheme={this.props.colorScheme}/>

                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'presentation')} />
                </div>
            </section>

        )
    }
}

export default Presentation;
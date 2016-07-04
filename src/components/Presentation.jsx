import React from "react";
import GuidLines from './GuidLines.jsx';
import Slider from 'react-slick';
import './Presentation.less';

import Waypoint from 'react-waypoint';


class Presentation extends React.Component {
    render() {
        const sliderSettings = {
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000
        };

        return(
            <section className="section presentation">
                <Slider {...sliderSettings}>
                    <div className="presentation__slide presentation__slide--1">
                        <div className="presentation__body">
                            <button className="presentation__break-btn">break it<br /> with us</button>
                            <div className="presentation__intro">
                                <h2 className="presentation__lead-in">
                                    imagination<br /> is the <span className="presentation__lead-in--underline">only</span> limit.
                                </h2>
                                <div className="presentation__text">
                                    we are keeping our hand on pulse of trends<br />but still always one step ahead
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="presentation__slide presentation__slide--2">
                        <div className="presentation__body">
                            <h2 className="brand-name brand-name--presentation">
                                <span className="brand-name__text">
                                    <i className="brand-name__star">*</i>
                                    <i className="brand-name__W">w</i>
                                    <i className="brand-name__H">h</i>
                                    <i className="brand-name__A">a</i><br />
                                    <i className="brand-name__L">l</i><br />
                                    <i className="brand-name__E">e</i>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="presentation__slide presentation__slide--3">
                        <div className="presentation__body">
                            <div className="presentation__intro">
                                <h2 className="presentation__lead-in">
                                    mobile<br /> application<br /> design.
                                </h2>
                                <div className="presentation__text">
                                    from ideas to mockups<br /> to design<br /> to your enjoy
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="presentation__slide presentation__slide--4">
                        <div className="presentation__body">
                            <div className="presentation__intro">
                                <h2 className="presentation__lead-in">
                                    branding
                                </h2>
                                <div className="presentation__text">
                                    we will make your  brand is unique<br /> and noticable
                                </div>
                            </div>
                            <div className="terminal-42 terminal-42--presentation">
                                <span className="terminal-42__color">#F8E71C</span><br />
                                <span className="terminal-42__name">Terminal 42</span><br />
                                <span className="terminal-42__text">coworking<br /> space</span>
                            </div>
                        </div>
                    </div>
                </Slider>
                <button className="presentation__more-btn">More</button>
                <GuidLines colorScheme={this.props.colorScheme}/>

                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'presentation')} />
                </div>
            </section>

        )
    }
}

class CustomPrevArrow extends React.Component{
    render() {
        return (
            <button type="button" className="slick-prev" {...this.props} />
        )
    }
}

class CustomNextArrow extends React.Component{
    render() {
        return (
            <button type="button" className="slick-next" {...this.props} />
        )
    }
}

export default Presentation;
import React from "react";
import GuidLines from './GuidLines.jsx';
import Slider from 'react-slick';

class Presentation extends React.Component {
    render() {
        const sliderSettings = {
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000
        };

        return(
            <section className="section-part presentation">
                <Slider {...sliderSettings}>
                    <div>
                        <div className="section-part__slides presentation__slide-1">
                            <button className="presentation__break-btn">break it<br /> with us</button>
                            <div className="presentation__intro">
                                <h2 className="presentation__lead-in">imagination<br /> is the <span className="presentation__lead-in--underline">only</span> limit.</h2>
                                <div className="presentation__text">
                                    we are keeping our hand on pulse of trends<br />but still always one step ahead
                                </div>
                            </div>
                            <span className="presentation__blur-block" />
                            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1">
                                <defs>
                                    <filter id="blur">
                                        <feGaussianBlur stdDeviation="5"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Slider>
                <GuidLines />
            </section>

        )
    }
}

export default Presentation;


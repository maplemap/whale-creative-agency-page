import React from "react";
import GuidLines from './GuidLines.jsx';
import Slider from 'react-slick';
import './Presenation.less';


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
                    <div className="presentation__slide"></div>
                    <div className="presentation__slide"></div>
                </Slider>
                <button className="presentation__more-btn">More</button>
                <GuidLines />
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

// <span className="presentation__blur-block" />
// <ul className="brand-name brand-name--presentation">
//     <li className="brand-name__star">*</li>
//     <li className="brand-name__W">w</li>
//     <li className="brand-name__H">h</li>
//     <li className="brand-name__A">a</li>
//     <li className="brand-name__L">l</li>
//     <li className="brand-name__E">e</li>
// </ul>
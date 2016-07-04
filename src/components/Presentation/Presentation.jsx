import React from "react";
import GuidLines from '../GuidLines.jsx';
import Slider from 'react-slick';

import Slide_1 from './Slide_1.jsx';
import Slide_2 from './Slide_2.jsx';
import Slide_3 from './Slide_3.jsx';
import Slide_4 from './Slide_4.jsx';

import './Presentation.less';

import Waypoint from 'react-waypoint';


class Presentation extends React.Component {
    render() {
        const slideComponents = [
            <Slide_1 />,
            <Slide_2 />,
            <Slide_3 />,
            <Slide_4 />
        ];

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
                    {
                        slideComponents.map((slide, index) =>
                            <div key={index}>{slide}</div>
                        )
                    }
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
import React from "react";
import Slider from 'react-slick';

import Slide_1 from './PresentationSlide_1.jsx';
import Slide_2 from './PresentationSlide_2.jsx';
import Slide_3 from './PresentationSlide_3.jsx';
import Slide_4 from './PresentationSlide_4.jsx';

class PresentationSlider extends React.Component {
    render() {
        const slideComponents = [
            <Slide_1 />,
            <Slide_2 slideNumber='01' />,
            <Slide_3 slideNumber='02' />,
            <Slide_4 slideNumber='03' />
        ];

        const slides =  slideComponents.map((slide, index) =>
            <div key={index}>
                {slide}
            </div>
        );

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
            <Slider {...sliderSettings}>
                {slides}
            </Slider>
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

export default PresentationSlider;

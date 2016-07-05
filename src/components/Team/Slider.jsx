import React from "react";
import Slider from 'react-slick';

import Slide_1 from './Slide_1.jsx';
import Slide_2 from './Slide_2.jsx';
import Slide_3 from './Slide_3.jsx';
import Slide_4 from './Slide_4.jsx';

class SliderSlick extends React.Component {

    state = {
        numPrevBtn: 4,
        numNextBtn: 2
    };

    render() {
        const  slideComponents = [
            <Slide_1 />,
            <Slide_2 />,
            <Slide_3 />,
            <Slide_4 />
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
            prevArrow: <CustomPrevArrow numPrevBtn={this.state.numPrevBtn} />,
            nextArrow: <CustomNextArrow numNextBtn={this.state.numNextBtn} />,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            afterChange: this._calcPrevNextNumberSlide.bind(null, slideComponents.length)
        };

        return(
            <Slider {...sliderSettings}>
                {slides}
            </Slider>
        )
    }

    _calcPrevNextNumberSlide = (amount ,current) => {
        current = current + 1;

        const numPrevBtn = (current > 1) ? current - 1 : amount;
        const numNextBtn = (current < amount) ? current + 1 : 1;

        this.setState({
            numPrevBtn: numPrevBtn,
            numNextBtn: numNextBtn
        });
    }
}

class CustomPrevArrow extends React.Component{
    render() {
        return (
            <button
                type="button"
                className="slick-prev"
                data-page-num={this.props.numPrevBtn}
                {...this.props}
            />
        )
    }
}

class CustomNextArrow extends React.Component{
    render() {
        return (
            <button
                type="button"
                className="slick-next"
                data-page-num={this.props.numNextBtn}
                {...this.props}
            />
        )
    }
}

export default SliderSlick;
import React from "react";
import Slider from 'react-slick';

import Slide_1 from './TeamSlide_1.jsx';
import Slide_2 from './TeamSlide_2.jsx';
import Slide_3 from './TeamSlide_3.jsx';
import Slide_4 from './TeamSlide_4.jsx';

class TeamSlider extends React.Component {

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

    _calcPrevNextNumberSlide = (amount ,currentIndx) => {
        currentIndx += 1;

        const numPrevBtn = (currentIndx > 1) ? currentIndx - 1 : amount;
        const numNextBtn = (currentIndx < amount) ? currentIndx + 1 : 1;

        this.setState({
            numPrevBtn: numPrevBtn,
            numNextBtn: numNextBtn
        });
    }
}

class CustomPrevArrow extends React.Component{
    render() {
        const {numPrevBtn, ...restProp} = this.props;
        
        return (
            <button
                type="button"
                className="slick-prev"
                data-page-num={numPrevBtn}
                {...restProp}
            />
        )
    }
}

class CustomNextArrow extends React.Component{
    render() {
        const {numNextBtn, ...restProp} = this.props;
        
        return (
            <button
                type="button"
                className="slick-next"
                data-page-num={numNextBtn}
                {...restProp}
            />
        )
    }
}

export default TeamSlider;

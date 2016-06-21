import React from "react";
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
            <section className="">
                <Slider {...sliderSettings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Slider>
            </section>

        )
    }
}

export default Presentation;


import React from "react";
import GuidLines from './GuidLines.jsx';
import Slider from 'react-slick';
import './Team.less';


class Team extends React.Component {
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
            <section className="section team">
                <Slider {...sliderSettings}>
                    <div className="team__slide team__slide--1">
                        <div className="team__body">
                            <article className="description description--team" data-num="1">
                                <h2 className="description__title">About us</h2>
                                <hr className="description__stroke" />
                                <p className="description__text">
                                    We are a small family of passionate and creative people. Located in Cherkasy Ukraine.
                                    Our goal is to drive your business growth by keeping design affordable yet still beautiful and exclusive.
                                    We offer a full stack of design services: brand identity, logo design, mobile app and website design,
                                    marketing materials for print and even music production.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="team__slide team__slide--2">
                        <div className="team__body">
                            <article className="description description--team" data-num="2">
                                <h2 className="description__title">About us</h2>
                                <hr className="description__stroke" />
                                <p className="description__text">
                                    We are a small family of passionate and creative people. Located in Cherkasy Ukraine.
                                    Our goal is to drive your business growth by keeping design affordable yet still beautiful and exclusive.
                                    We offer a full stack of design services: brand identity, logo design, mobile app and website design,
                                    marketing materials for print and even music production.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="team__slide team__slide--3">
                        <div className="team__body">
                            <article className="description description--team" data-num="3">
                                <h2 className="description__title">About us</h2>
                                <hr className="description__stroke" />
                                <p className="description__text">
                                    We are a small family of passionate and creative people. Located in Cherkasy Ukraine.
                                    Our goal is to drive your business growth by keeping design affordable yet still beautiful and exclusive.
                                    We offer a full stack of design services: brand identity, logo design, mobile app and website design,
                                    marketing materials for print and even music production.
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="team__slide team__slide--4">
                        <div className="team__body">
                            <article className="description description--team" data-num="4">
                                <h2 className="description__title">About us</h2>
                                <hr className="description__stroke" />
                                <p className="description__text">
                                    We are a small family of passionate and creative people. Located in Cherkasy Ukraine.
                                    Our goal is to drive your business growth by keeping design affordable yet still beautiful and exclusive.
                                    We offer a full stack of design services: brand identity, logo design, mobile app and website design,
                                    marketing materials for print and even music production.
                                </p>
                            </article>
                        </div>
                    </div>
                </Slider>
                <GuidLines />
            </section>

        )
    }
}

class CustomPrevArrow extends React.Component{
    render() {
        return (
            <button type="button" className="slick-prev" data-page-num="3"{...this.props} />
        )
    }
}

class CustomNextArrow extends React.Component{
    render() {
        return (
            <button type="button" className="slick-next" data-page-num="4" {...this.props} />
        )
    }
}

export default Team;
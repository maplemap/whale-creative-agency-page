import React from "react";
import ProjectSlider from 'react-slick';

import './GalleryReview.less';

import ReviewBox from './ReviewBox.jsx';

class GalleryReview extends React.Component {
    static defaultProps = {
        amountImgPreview: 4
    };

    render() {
        const projectSliderSettings = {
            // lazyLoad: true,
            draggable: false,
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            initialSlide: this.props.initialSlide,
            rtl: true
        };

        return(
            <div className="gallery-review">
                <ProjectSlider {...projectSliderSettings} >
                    {
                        this.props.projects.map((project, index) =>
                            <div key={index}>
                                <ReviewBox
                                    project={project}
                                    onClickCloseReview={this.props.onClickCloseReview}
                                    amountImgPreview={this.props.amountImgPreview}
                                />
                            </div>
                        )
                    }
                </ProjectSlider>
            </div>
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

export default GalleryReview;
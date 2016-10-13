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
            draggable: false,
            infinite: (this.props.projects.length > 1),
            arrows: (this.props.projects.length > 1),
            dots: false,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            slickGoTo: this._getCurrentSlideIndex()
        };

        return(
            <div className="gallery-review">
                <ProjectSlider {...projectSliderSettings} >
                    {
                        this.props.projects.map((project) =>
                            <div key={project.id}>
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

    _getCurrentSlideIndex = () => {
        const slidePosition = this.props.projects.map((project) => {return parseInt(project.id, 10)}).indexOf(this.props.currentSlideID);

        return (slidePosition + 1) ? slidePosition : false;
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

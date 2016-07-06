import React from "react";
import ProjectSlider from 'react-slick';

import './GalleryReview.less';

class GalleryReview extends React.Component {
    static defaultProps = {
        amountImgPreview: 4
    };

    render() {
        const projectSliderSettings = {
            lazyLoad: true,
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
            autoplaySpeed: 3000
        };

        return(
            <div className="gallery-review">
                <ProjectSlider {...projectSliderSettings} >
                    {
                        this.props.projects.map((project, index) =>
                            <div key={index}>
                                <div
                                    className="gallery-review__body"
                                >
                                    <span
                                        className="close-btn close-btn--gallery-review"
                                        onClick={this.props.onClickCloseReview}
                                    />
                                    <div className="gallery-review__project-name">
                                        {project.name}
                                    </div>
                                    <div className="gallery-review__project-customer">
                                        {project.customer}
                                    </div>
                                    <div className="gallery-review__project-view">
                                        <img src={`static/projects/${project.images[0]}`} alt="project-name" />
                                    </div>
                                    <div className="gallery-review__project-preview">
                                        {
                                            project.images.map((imageName, index) => {
                                                if (index < this.props.amountImgPreview) {
                                                    return <div
                                                        key={index}
                                                        className="gallery-review__project-preview-item"
                                                    >
                                                        <img src={`static/projects/${imageName}`} alt="project-name" />
                                                    </div>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
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
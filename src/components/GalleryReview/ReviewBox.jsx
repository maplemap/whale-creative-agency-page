import React from "react";
import ImageLoading from '../../utils/ImageLoading.jsx';


class ReviewBox extends React.Component {
    state = {
        imageViewFilename: this.props.project.images[0],
        activePreviewIndex: 0
    };

    handlerClickItemPreviewImg = (imageName, index) => {
        this.setState({
            imageViewFilename: imageName,
            activePreviewIndex: index
        });
    };

    render() {
        const that = this;

        return(
            <div className="gallery-review__body">
                <span
                    className="close-btn close-btn--gallery-review"
                    onClick={this.props.onClickCloseReview}
                />
                <div className="gallery-review__project-name"> {this.props.project.name} </div>
                <div className="gallery-review__project-customer"> {this.props.project.customer} </div>
                <div className="gallery-review__project-view">
                    <ImageLoading
                        src={`static/projects/${this.state.imageViewFilename}`}
                        alt={this.props.project.name}
                    />
                </div>
                <div className="gallery-review__project-preview">
                    {
                        this.props.project.images.map((imageName, index) => {
                            if (index < this.props.amountImgPreview) {
                                return <div
                                    key={index}
                                    className={`gallery-review__project-preview-item ${(index === this.state.activePreviewIndex) ? 'gallery-review__project-preview-item--active' : ''}`}
                                    onClick={that.handlerClickItemPreviewImg.bind(null, imageName, index)}
                                >
                                    <ImageLoading
                                        className="gallery-review__project-image"
                                        src={`static/projects/${imageName}`}
                                        alt={that.props.project.name}
                                    />
                                </div>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ReviewBox;

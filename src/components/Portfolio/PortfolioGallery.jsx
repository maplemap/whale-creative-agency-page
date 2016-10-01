import React from "react";

import Masonry from 'react-masonry-component';


class PortfolioGallery extends React.Component {

    static defaultProps = {
        masonryOptions: {
            gutter: 20
        }
    };

    render() {
        const projects = this.props.projects;

        return (
            <div className="gallery gallery--portfolio">
                <div className="gallery__grid">
                    <Masonry options={this.props.masonryOptions}>
                        {
                            projects.map(project =>
                                <div
                                    key={project.id}
                                    data-index={project.id}
                                    className="gallery__item"
                                    onClick={this.props.onClickGalleryItem}
                                >
                                    <img src={`static/projects/${project.shortcut}`} alt={project.name} />
                                    <div className="popup popup--gallery-item">
                                        <div
                                           className="popup__see-icon"
                                           title={`see ${project.name}`}
                                        >
                                            See project
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Masonry>
                </div>
            </div>
        )
    }
}

export default PortfolioGallery;

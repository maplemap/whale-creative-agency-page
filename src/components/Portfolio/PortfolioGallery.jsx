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
                                    className="gallery__item"
                                >
                                    <img src={`static/projects/${project.image}`} alt={project.name} />
                                    <div className="mask mask--gallery-item">
                                        <a href="#"
                                           className="mask__see-icon"
                                           title={`see ${project.name}`}
                                        >
                                            See project
                                        </a>
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
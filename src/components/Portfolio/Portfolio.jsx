import React from "react";
import GuidLines from '../GuidLines.jsx';

import PortfolioGallery from './PortfolioGallery.jsx';
import PortolioDescription from './PortolioDescription.jsx';
import GalleryReview from '../GalleryReview.jsx';
import './Portfolio.less';

import Waypoint from 'react-waypoint';

class Portfolio extends React.Component {

    state = {
        filter: 'all',
        projects: this.props.projects,
        galleryReviewOn: false
    };

    handlerSortPortfolio = (e) => {
        const sortCategory = e.target.dataset.category;
        let sortProjects;

        if(sortCategory === 'all') {
            sortProjects = this.props.projects;
        } else {
            sortProjects = this.props.projects.filter(project => {
                return project.category === sortCategory;
            });
        }

        this.setState({
            filter: sortCategory,
            projects: sortProjects
        });
    };

    handlerClickCloseReview = () => {
        this.setState({
            galleryReviewOn: false
        });
    };

    handlerClickGalleryItem = () => {
        this.setState({
            galleryReviewOn: true
        });
    };

    render() {
        return (
            <section className="section portfolio">
                <div className="portfolio__body">
                    <PortolioDescription
                        projects={this.props.projects}
                        description={this.props.categoryDescription}
                        filter={this.state.filter}
                        onClickSortPortfolio={this.handlerSortPortfolio}
                    />
                    
                    <PortfolioGallery 
                        projects={this.state.projects}
                        onClickGalleryItem={this.handlerClickGalleryItem}
                    />
                </div>
                
                <GuidLines 
                    colorScheme={this.props.colorScheme} 
                    disableLines={[5]}
                />
                
                <div className="waypoint waypoint--portfolio">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'portfolio')} />
                </div>
                <div className={`mask ${(this.state.galleryReviewOn) ? 'mask--gallery-review' : ''}`}>
                    <GalleryReview
                        onClickCloseReview={this.handlerClickCloseReview}
                        projects={this.props.projects}
                    />
                </div>
            </section>
        )
    }
}

export default Portfolio;
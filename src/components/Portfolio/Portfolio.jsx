import React from "react";
import GuidLines from '../GuidLines.jsx';

import PortfolioGallery from './PortfolioGallery.jsx';
import './Portfolio.less';

import Waypoint from 'react-waypoint';

class Portfolio extends React.Component {

    state = {
        filter: 'all',
        projects: this.props.projects
    };

    handlerSortClick = (e) => {
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

    render() {
        const that = this;
        const categories = this._getUniqueCategories();

        return (
            <section className="section portfolio">
                <div className="portfolio__body">
                    <article className="description description--portfolio">
                        <h2 className="description__title">Our work</h2>
                        <ul className="gallery-menu gallery-menu--portfolio">
                            <li
                                className={`gallery-menu__item ${ (this.state.filter === 'all')? 'gallery-menu__item--current' : '' }`}
                                data-category="all"
                                onClick={that.handlerSortClick}
                            >
                                All
                            </li>
                            {
                                categories.map((category, index) =>
                                    <li
                                        key={index}
                                        data-category={category}
                                        className={`gallery-menu__item ${ (this.state.filter === category)? 'gallery-menu__item--current' : '' }`}
                                        onClick={that.handlerSortClick}
                                    >
                                        {category}
                                    </li>
                                )
                            }
                        </ul>
                        <hr className="description__stroke" />
                        <p className="description__text">
                            For seven years of being in IT industry, we’ve created designs for dozens of web and mobile services,
                            and got evolved in changing web and mobile platforms. As a specialists in design
                            and as a really passionate about our profession, we always pay attention to details.
                            We do understand the value of your time and the whole product so we are taking care of every pixel as our own.
                        </p>
                    </article>

                    <PortfolioGallery projects={this.state.projects} />
                </div>
                
                <GuidLines 
                    colorScheme={this.props.colorScheme} 
                    disableLines={[5]}
                />
                
                <div className="waypoint waypoint--portfolio">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'portfolio')} />
                </div>
            </section>
        )
    }

    _getUniqueCategories() {
        return [...new Set(this.props.projects.map(project => project.category))];
    }
}

export default Portfolio;
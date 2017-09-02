import React, { Component } from 'react';
import './css/community_projects.css';
import logo from '../../assets/shaper.svg';
import FeaturedProjects from './featured_projects';
import ProjectsGridContainer from './projects_grid_container';

class CommunityProjects extends Component {


  componentWillMount() {
    this.props.requestCategory("all");
    this.props.requestFeatured();
  };


  render() {
    if(this.props.featured === undefined) return null;

    return (
      <div className="community-projects">
        <header className="community-header">
          <div className="header-contents">
            <div className="header-top">
              <div className="header-left">
                <img className="header-logo" alt="" src={logo}/>
              </div>
              <div className="header-right">
                <button className="new-project-button">
                  NEW PROJECT
                </button>
              </div>
            </div>
            <div className="header-text">
              SHARE AND EXPLORE
              <br/>
              SHAPER PROJECTS
            </div>
          </div>
         </header>
        <div className="featured-container">
          <FeaturedProjects
            featured1={this.props.featured[0]}
            featured2={this.props.featured[1]}
            featured3={this.props.featured[2]} />
        </div>
        <div className="projects-grid-container">
           <div className="grid-container">
             <ProjectsGridContainer
              projects={this.props.all} />
           </div>
       </div>
      </div>
    );
  }
}

export default CommunityProjects;

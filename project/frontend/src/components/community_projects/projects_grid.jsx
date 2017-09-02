import React, { Component } from 'react';
import ProjectsGridItem from './projects_grid_item';
import './css/projects_grid.css';
import search from '../../assets/search.svg';

class ProjectsGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: "all",
      categories: [
        "all",
        "furniture",
        "artwork",
        "jewelry",
        "cabinetry",
        "joinery",
        "inlay",
      ]
    }
    this.renderSelectedCategory = this.renderSelectedCategory.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.renderCategoriesBar = this.renderCategoriesBar.bind(this);
  }

  componentDidMount(){
    this.state.categories.forEach((category) => {
      this.props.requestCategory(category);
    })
  }

  renderSelectedCategory(category){
    return this.state.selected === category ? "selected-item" : "category-item"
  }

  changeCategory(category){
    this.setState({ selected: category})
  }

  renderCategoriesBar(){
    return(
      <div className="categories-search-bar">
        <ul className="category-list">
          { this.state.categories.map((category, idx) => (
            <li
              key={ idx }
              className={this.renderSelectedCategory(category)}
              onClick={()=> (this.changeCategory(category))}>
              { category }
            </li>
           )) }
        </ul>
      <div className="search-container">
        <img className="search-img" src={ search } alt="search" />
        <p>SEARCH</p>
      </div>
    </div>
    )
  }

  render() {
      let selectedProjects = this.props[this.state.selected];

      if(this.props.all.length === 0) return null;

      return (
        <div className="projects-grid">
            {this.renderCategoriesBar()}
          <ul className="projects">
           { selectedProjects.map((project) => (
             <ProjectsGridItem
               key={project.title}
               title={project.title}
               image={project.posterImage}
               likes={project.likes} />
           )) }
         </ul>
        </div>
    );
   }
}

export default ProjectsGrid;

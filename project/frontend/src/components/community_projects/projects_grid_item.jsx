import React, { Component } from 'react';
import Palette from 'react-palette'
import './css/projects_grid_item.css';
import thumb from '../../assets/thumb.svg';


class ProjectsGridItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      liked :false
    }

  this.renderLikeClick = this.renderLikeClick.bind(this);
  }

  renderLikeClick(){
    this.setState({ liked: !this.state.liked})
  }


  render() {
    const { image, likes, title } = this.props;
    const imageUrl = 'http://localhost:8080' + image;
    let likeButtonStyle = this.state.liked ? "liked-button" : "grid-like-button";
    let displayLikes = this.state.liked ? likes + 1 : likes;

    if(this.props.image === undefined) return null;

    return (
      <li className="projects-grid-item">
        <img  className="grid-image" src={ imageUrl } alt="gridImage" />
        <div className="grid-project-details">
          <div className={likeButtonStyle} onClick={this.renderLikeClick}>
            <img className="grid-thumb" src={ thumb } alt="thumb" />
            <div>{ displayLikes }</div>
          </div>
          <Palette image={ imageUrl }>
            { palette => (
              <div style={{ color: palette.vibrant }} className="grid-title">
                  { title }
              </div>
            ) }
          </Palette>
        </div>
      </li>
    );
  }
}

export default ProjectsGridItem;

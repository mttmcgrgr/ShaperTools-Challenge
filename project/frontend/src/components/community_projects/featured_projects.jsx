import React, { Component } from 'react';
import './css/featured_projects.css';
import Slider from 'react-slick';
import thumb from '../../assets/thumb.svg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class FeaturedProjects extends Component {

  render() {
    const { featured1, featured2, featured3 } = this.props;
    const baseUrl = 'http://localhost:8080';
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if(this.props.featured1 === undefined) return null;
    
    return (
      <div>
        <div className="featured-title">
          Awesome Projects
        </div>
        <Slider {...settings}>

          <div>
            <div className="slide">
              <img src={ baseUrl + featured1.posterImage } alt="slideImg" />
              <div className="project-details">
                <div className="project-title">{ featured1.title }</div>
                <div className="project-description">{ featured1.description }</div>
                <button className="featured-like-button">
                  <img className="featured-thumb" src={ thumb } alt="like-thumb" />
                  <div>{ featured1.likes }</div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="slide">
              <img src={ baseUrl + featured2.posterImage } alt="slideImg" />
              <div className="project-details">
                <div className="project-title">{ featured2.title }</div>
                <div className="project-description">{ featured2.description }</div>
                <button className="featured-like-button">
                  <img className="featured-thumb" src={ thumb } alt="like-thumb" />
                  <div>{ featured2.likes }</div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="slide">
              <img src={ baseUrl + featured3.posterImage } alt="slideImg" />
              <div className="project-details">
                <div className="project-title">{ featured3.title }</div>
                <div className="project-description">{ featured3.description }</div>
                <button className="featured-like-button">
                  <img className="featured-thumb" src={ thumb } alt="like-thumb" />
                  <div>{ featured3.likes }</div>
                </button>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    )
  }
}

export default FeaturedProjects;

/*

*/

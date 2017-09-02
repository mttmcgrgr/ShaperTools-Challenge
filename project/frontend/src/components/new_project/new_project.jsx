import React, { Component } from 'react';
import './css/new_project.css';
import logo from '../../assets/shaper.svg';

class NewProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      instructions: {},
      posterImage: ""
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {

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
              CREATE YOUR OWN
              <br/>
              SHAPER PROJECT
            </div>
          </div>
         </header>

         <form className="new-project-form">

           <br/>

           <label className="input-element"> PROJECT TITLE:
             <input
               type="text"
               value={this.state.title}
               onChange={this.update("title")}
               className="title-input" />
           </label>

           <br/>

           <label className="input-element"> DESCRIPTION:
             <textarea
               type="text"
               value={this.state.description}
               rows="10" cols="30"
               onChange={this.update("description")}
               className="" />
           </label>

         </form>

      </div>
    );
  }
}

export default NewProject;

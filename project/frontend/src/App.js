import React, { Component } from 'react';
import './App.css';
import CommunityProjectsContainer from './components/community_projects/community_projects_container';
import NewProject from './components/new_project/new_project';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={CommunityProjectsContainer} />
        <Route path="/newproject" component={NewProject} />
      </div>
    );
  }
}

export default App;

import {
  RECEIVE_FEATURED,
  RECEIVE_CATEGORY } from '../actions/community_actions';
import merge from 'lodash/merge';

const defaultState = {
  featured: [],
  furniture: [],
  all: [],
  artwork: [],
  jewelry: [],
  cabinetry: [],
  joinery: [],
  inlay: [],
};

const CommunityReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_FEATURED:
      newState.featured = action.projects;
      return newState;
    case RECEIVE_CATEGORY:
      newState[action.category] = action.projects;
      return newState;
    default:
      return state;
  }
};

export default CommunityReducer;

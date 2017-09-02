import { combineReducers } from 'redux';
import CommunityReducer from './community_reducer';

const rootReducer = combineReducers({
  community: CommunityReducer,
});

export default rootReducer;

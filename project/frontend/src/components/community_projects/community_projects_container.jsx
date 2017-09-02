import { connect } from 'react-redux';
import CommunityProjects from './community_projects';
import { requestFeatured, requestCategory } from '../../actions/community_actions';

const mapStateToProps = state => ({
  featured: state.community.featured,
  all: state.community.all,
});


const mapDispatchToProps = dispatch => ({
  requestFeatured: () => dispatch(requestFeatured()),
  requestCategory: (category) => dispatch(requestCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityProjects);

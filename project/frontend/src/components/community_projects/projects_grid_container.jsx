import { connect } from 'react-redux';
import ProjectsGrid from './projects_grid';
import { requestCategory } from '../../actions/community_actions';

const mapStateToProps = state => ({
  furniture: state.community.furniture,
  artwork: state.community.artwork,
  jewelry: state.community.jewelry,
  cabinetry: state.community.cabinetry,
  joinery: state.community.joinery,
  inlay: state.community.inlay,
  all: state.community.all,
});


const mapDispatchToProps = dispatch => ({
  requestCategory: (category) => dispatch(requestCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsGrid);

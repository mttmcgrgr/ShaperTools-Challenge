import { fetchFeatured, fetchCategory } from "../util/community_api_util";

export const RECEIVE_FEATURED = "RECEIVE_FEATURED";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";


 export const receiveFeatured = (projects) => ({
  type: RECEIVE_FEATURED,
  projects
});

export const requestFeatured = () => dispatch => (
  fetchFeatured().then(projects => dispatch(receiveFeatured(projects)))
);





export const receiveCategory = (projects, category) => ({
 type: RECEIVE_CATEGORY,
 projects,
 category
});

export const requestCategory = (category) => dispatch => (
 fetchCategory(category).then(projects => dispatch(receiveCategory(projects, category)))
);

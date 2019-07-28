import api from "../api";
import { SET_TAGS } from "../reducer/home";
import { FILTER_TAG } from "../reducer/articles";
export const setTags = () => async dispatch => {
  const data = await api.Tags.getAll();
  dispatch({ type: SET_TAGS, payload: data.tags });
};

export const filterTag = tag => async dispatch => {
  const data = await api.Articles.byTag(tag);
  dispatch({ type: FILTER_TAG, tag, payload: data.articles });
};

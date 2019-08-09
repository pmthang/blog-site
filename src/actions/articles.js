import api from "../api";
import {
  REQUEST_ARTICLES,
  SET_ARTICLES,
  REQUEST_ARTICLES_FAILED,
  SET_SINGLE_ARTICLE,
  REQUEST_SINGLE_ARTICLE,
  FAVORITE,
  UNFAVORITE,
} from "../reducer/articles";

export const setArticles = () => async dispatch => {
  dispatch({ type: REQUEST_ARTICLES });
  try {
    const data = await api.Articles.getAll();
    dispatch({ type: SET_ARTICLES, payload: data.articles });
  } catch (error) {
    dispatch({ type: REQUEST_ARTICLES_FAILED, error });
  }
};

export const favorite = slug => async dispatch => {
  const data = await api.Articles.favorite(slug);
  dispatch({ type: FAVORITE, slug, payload: data.article });
};

export const unfavorite = slug => async dispatch => {
  const data = await api.Articles.unfavorite(slug);
  dispatch({ type: UNFAVORITE, slug, payload: data.article });
};
export const setArticle = slug => async dispatch => {
  dispatch({ type: REQUEST_SINGLE_ARTICLE });
  const data = await api.Articles.getSlug(slug);
  dispatch({ type: SET_SINGLE_ARTICLE, slug, payload: data.article });
};

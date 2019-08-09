export const SET_ARTICLES = "SET_ARTICLES";
export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_FAILED = "REQUEST_ARTICLES_FAILED";
export const SET_SINGLE_ARTICLE = "SET_SINGLE_ARTICLE";
export const FILTER_TAG = "FILTER_TAG";
export const REQUEST_SINGLE_ARTICLE = "REQUEST_SINGLE_ARTICLE";
export const FAVORITE = "FAVORITE";
export const UNFAVORITE = "UNFAVORITE";
const articles = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        loading: true,
        articles: null,
      };
    case SET_ARTICLES:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case REQUEST_ARTICLES_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case REQUEST_SINGLE_ARTICLE:
      return {
        ...state,
        loading: true,
        article: null,
      };
    case SET_SINGLE_ARTICLE:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };
    case FILTER_TAG:
      return {
        ...state,
        tag: action.tag,
        articles: action.payload,
      };
    case FAVORITE:
    case UNFAVORITE:
      return {
        ...state,
        articles: state.articles.map(article => {
          if (article.slug === action.slug) {
            return {
              ...article,
              favorite: action.payload.favorited,
              favoritesCount: action.payload.favoritesCount,
            };
          }
          return article;
        }),
      };
    default:
      return state;
  }
};

export default articles;

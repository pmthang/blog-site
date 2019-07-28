export const SET_TAGS = "SET_TAGS";

const home = (state = {}, action) => {
  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default home;

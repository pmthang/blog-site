export const APP_LOAD = "APP_LOAD";
export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
      };

    default:
      return state;
  }
};

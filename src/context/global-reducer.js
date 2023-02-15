const globalReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOADING':
      return {
        state: {
          ...state,
          isLoading: true,
        },
      };
    case 'DATA_LOADED':
      return {
        state: {
          ...state,
          isLoading: false,
          data: null,
        },
      };
    case 'DATA_ERROR':
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
export default globalReducer;

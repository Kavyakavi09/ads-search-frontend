/* eslint-disable import/no-anonymous-default-export */

export default (state = { isLoading: true, AdsDetails: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case 'FETCH_ADS':
      return {
        ...state,
        AdsDetails: action.payload,
      };
    case 'FETCH_ADS_BY_SEARCH':
      return {
        ...state,
        AdsDetails: action.payload,
      };

    default:
      return state;
  }
};

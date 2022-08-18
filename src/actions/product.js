import axios from 'axios';

export const getAds = () => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await axios.get(
      'https://ads-corner-app.herokuapp.com/api/ads'
    );
    dispatch({ type: 'FETCH_ADS', payload: data });
    dispatch({ type: 'END_LOADING' });
  } catch (error) {
    console.log(error);
  }
};

export const getAdsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await axios.get(
      `https://ads-corner-app.herokuapp.com/api/ads/search?searchQuery=${searchQuery}`
    );
    dispatch({ type: 'FETCH_ADS_BY_SEARCH', payload: data });
    dispatch({ type: 'END_LOADING' });
  } catch (error) {
    console.log(error);
  }
};

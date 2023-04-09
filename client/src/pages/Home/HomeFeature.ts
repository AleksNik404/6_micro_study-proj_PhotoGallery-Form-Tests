import { api } from '../../utils/Api/Api';
import { RandomResponse, SearchResponse } from '../../utils/Api/types';
import { API_COUNT_PHOTOS } from '../../utils/constants';
import { Action } from './HomeReducer';

export const getRandomPhoto = async (dispatch: React.Dispatch<Action>) => {
  try {
    dispatch({ type: 'FETCH_START' });

    const result = await api.getPhotos<RandomResponse>('photos/random', {
      count: API_COUNT_PHOTOS,
    });
    const photos = result.map(api.mappingData);

    dispatch({ type: 'FETCH_SUCCESS', payload: photos });
  } catch (error) {
    console.log(error);

    dispatch({ type: 'FETCH_ERROR' });
  }
};

export const getSearchPhoto = async (dispatch: React.Dispatch<Action>, searchValue: string) => {
  try {
    dispatch({ type: 'FETCH_START' });

    const { results } = await api.getPhotos<SearchResponse>('search/photos', {
      query: searchValue,
      per_page: API_COUNT_PHOTOS,
    });
    const photos = results.map(api.mappingData);

    dispatch({ type: 'ADD_SEARCH_VALUE', payload: searchValue });
    dispatch({ type: 'FETCH_SUCCESS', payload: photos });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'FETCH_ERROR' });
  }
};

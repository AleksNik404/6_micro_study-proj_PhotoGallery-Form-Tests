import { api } from '../../utils/Api/Api';
import { RandomResponse, SearchResponse } from '../../utils/Api/types';
import { Action } from './HomeReducer';

export const getRandomPhoto = async (dispatch: React.Dispatch<Action>) => {
  try {
    dispatch({ type: 'FETCH_START' });

    const result = await api.photos<RandomResponse>('photos/random', { count: 14 });
    const photos = result.map(api.mappingData);

    dispatch({ type: 'FETCH_SUCCESS', payload: photos });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR' });
  }
};

export const getSearchPhoto = async (dispatch: React.Dispatch<Action>, searchValue: string) => {
  try {
    dispatch({ type: 'FETCH_START' });

    const { results } = await api.photos<SearchResponse>('search/photos', {
      query: searchValue,
      per_page: 14,
    });
    const photos = results.map(api.mappingData);

    dispatch({ type: 'ADD_SEARCH_VALUE', payload: searchValue });
    dispatch({ type: 'FETCH_SUCCESS', payload: photos });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR' });
  }
};

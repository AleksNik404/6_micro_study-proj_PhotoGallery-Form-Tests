import { LOCAL_STORAGE_SEARCH } from './constants';

export const formatPrice = (price: number, regionCurency = 'EUR') => {
  return Intl.NumberFormat('ru', {
    style: 'currency',
    currency: regionCurency,
  }).format(price);
};

export const addSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem(LOCAL_STORAGE_SEARCH, JSON.stringify(value));
};

export const getSearchValueFromLocalStorage = () => {
  const result = localStorage.getItem(LOCAL_STORAGE_SEARCH);
  const searchValue = result ? JSON.parse(result) : '';

  return searchValue;
};

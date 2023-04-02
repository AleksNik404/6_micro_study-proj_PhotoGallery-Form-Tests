import { LOCAL_STORAGE_SEARCH } from './constants';

export const formatPrice = (price: number, regionCurrency = 'EUR') => {
  return Intl.NumberFormat('ru', {
    style: 'currency',
    currency: regionCurrency,
  }).format(price);
};

export const subtractPercentage = (price: number, percent: number) =>
  price - (price / 100) * percent;

export const addSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem(LOCAL_STORAGE_SEARCH, JSON.stringify(value));
};

export const getSearchValueFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_SEARCH);
  if (!data) return '';

  const parsedResult = JSON.parse(data);

  return typeof parsedResult === 'string' ? parsedResult : '';
};

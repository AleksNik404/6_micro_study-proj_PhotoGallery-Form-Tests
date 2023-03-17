export const formatPrice = (price: number, regionCurency = 'EUR') => {
  return Intl.NumberFormat('ru', {
    style: 'currency',
    currency: regionCurency,
  }).format(price);
};

export const addSearchValueToLocalStorage = (value: string) => {
  localStorage.setItem('griz-search', JSON.stringify(value));
};

export const getSearchValueFromLocalStorage = () => {
  const result = localStorage.getItem('griz-search');
  const searchValue = result ? JSON.parse(result) : '';

  return searchValue;
};

export const formatPrice = (price: number, regionCurrency = 'EUR') => {
  return Intl.NumberFormat('ru', {
    style: 'currency',
    currency: regionCurrency,
  }).format(price);
};

export const subtractPercentage = (price: number, percent: number) =>
  price - (price / 100) * percent;

export const generateStablePriceById = (id: number, options: number[]) => {
  const indexOption = (id * 114) % options.length;
  return options[indexOption];
};

export const generateStableDiscountById = (id: number, salt = 114) => {
  if (id % 2) return 0;
  const rangeDiscountBySaltedId = ((id * salt) % 30) + 15;

  return rangeDiscountBySaltedId;
};

import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { addSearchValueToLocalStorage, getSearchValueFromLocalStorage } from './utils';

export const useSearchValueStorage = (initialValue = '') => {
  const [value, setValue] = useState(initialValue || getSearchValueFromLocalStorage());
  const valueRef = useRef(value);

  useEffect(() => {
    const handleBeforeUnload = () => addSearchValueToLocalStorage(valueRef.current);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      addSearchValueToLocalStorage(valueRef.current);
    };
  }, []);

  const updateValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    valueRef.current = value;
  };

  return [value, updateValue] as const;
};

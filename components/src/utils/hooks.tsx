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

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    valueRef.current = event.target.value;
  };

  return [value, updateValue] as const;
};

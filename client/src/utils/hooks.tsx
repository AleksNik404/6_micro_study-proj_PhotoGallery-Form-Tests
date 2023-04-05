import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { addSearchValueToLocalStorage, getSearchValueFromLocalStorage } from './localStorage';
import { useBeforeUnload } from 'react-router-dom';

export const useSearchValueStorage = (initialValue = '') => {
  const [value, setValue] = useState(initialValue || getSearchValueFromLocalStorage());
  const valueRef = useRef(value);

  useBeforeUnload(() => addSearchValueToLocalStorage(valueRef.current));

  useEffect(() => {
    return () => addSearchValueToLocalStorage(valueRef.current);
  }, []);

  const updateValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    valueRef.current = value;
  };

  return [value, updateValue] as const;
};

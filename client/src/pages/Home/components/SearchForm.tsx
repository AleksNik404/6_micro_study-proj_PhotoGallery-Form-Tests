import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { addSearchValueToLocalStorage } from '../../../utils/localStorage';
import { Action } from '../HomeReducer';
import InputSearch from './InputSearch';

type Props = {
  dispatch: React.Dispatch<Action>;
  submitValue: string;
};

export type SearchData = {
  submitValue: string;
};

const SearchForm = ({ dispatch, submitValue }: Props) => {
  const onSubmit: SubmitHandler<SearchData> = async ({ submitValue }) => {
    await addSearchValueToLocalStorage(submitValue);
    dispatch({ type: 'ADD_SEARCH_VALUE', payload: submitValue });
  };

  const { register, handleSubmit } = useForm<SearchData>({
    defaultValues: {
      submitValue,
    },
  });

  return (
    <InputContainerForm onSubmit={handleSubmit(onSubmit)}>
      <InputSearch register={register} />
    </InputContainerForm>
  );
};

const InputContainerForm = styled.form`
  max-width: 25rem;
  height: 2.8rem;
  margin: 1rem auto 2rem;
`;

export default SearchForm;

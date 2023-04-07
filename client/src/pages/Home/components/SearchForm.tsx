import React from 'react';
import styled from '@emotion/styled';
import { InputSearch } from '.';
import { Action } from '../Home';

import { SubmitHandler, useForm } from 'react-hook-form';
import { addSearchValueToLocalStorage } from '../../../utils/localStorage';

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

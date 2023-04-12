import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import InputSearch from './InputSearch';
import { useAppDispatch } from '../../../app/hooks';
import { updateQuery } from '../../../features/HomeSearch/HomeSearchSlice';

type Props = {
  submitValue: string | undefined;
};

export type SearchData = {
  submitValue: string;
};

const SearchForm = ({ submitValue }: Props) => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SearchData> = async ({ submitValue }) => {
    dispatch(updateQuery(submitValue));
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

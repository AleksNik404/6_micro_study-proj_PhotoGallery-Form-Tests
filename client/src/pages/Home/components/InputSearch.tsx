import styled from '@emotion/styled';

import { BsSearch } from 'react-icons/bs';
import { UseFormRegister } from 'react-hook-form';
import { SearchData } from './SearchForm';

type Props = {
  placeholder?: string;
  register: UseFormRegister<SearchData>;
};

const InputSearch = ({ placeholder = 'Search', register }: Props) => {
  return (
    <SearchContainer>
      <Icon>
        <BsSearch />
      </Icon>
      <InputText
        type="search"
        placeholder={placeholder}
        {...register('submitValue')}
        autoComplete="off"
      />
      <InputSubmit type="submit" value="Submit" />
    </SearchContainer>
  );
};

export default InputSearch;

const SearchContainer = styled.div`
  display: flex;
  place-items: center;
  height: 100%;
  width: 100%;

  gap: calc(0.6rem + 0.6vw);
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;
  background-color: var(--primary-color-400);

  &:focus-within {
    background-color: var(--primary-color-500);
  }
`;

const Icon = styled.div`
  @media (max-width: 25em) {
    display: none;
  }
  svg {
    display: flex;
    position: relative;
    transform: translateY(1px);
  }

  cursor: pointer;
`;

const InputText = styled.input`
  flex: 1 1 100%;
  height: 100%;
  min-width: 0%;
  outline: 0;
  background-color: transparent;
  color: var(--text-color-hover);

  animation: all 0.3s;

  &::-webkit-search-cancel-button {
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const InputSubmit = styled.input`
  padding: 0 15px;
  align-self: stretch;

  background-color: var(--primary-color-100);
  border-radius: var(--border-radius-sm);
  color: var(--primary-color-900);

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #01000497;
    color: var(--text-color-grey);
  }
`;

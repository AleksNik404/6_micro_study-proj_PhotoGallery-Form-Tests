import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { BsSearch } from 'react-icons/bs';

type Props = {
  searchValue: string;
  placeholder?: string;
  handlerSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const InputSearch = ({
  searchValue,
  handlerSearchValue,
  placeholder = 'Search',
  onClick,
}: Props) => {
  return (
    <>
      <SearchContainer>
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <Input
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={handlerSearchValue}
        />
        <input type="submit" onClick={onClick} />
      </SearchContainer>
    </>
  );
};

export default InputSearch;

const SearchContainer = styled.form`
  display: flex;
  place-items: center;
  width: 100%;
  gap: 10px;
  border-radius: 2rem;

  transition: all 0.3s;
  background-color: var(--primary-color-400);

  &:focus-within {
    background-color: var(--primary-color-500);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-right: 5em;

  outline: 0;
  background-color: transparent;
  color: var(--text-color-hover);

  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  margin-left: 0.8em;

  svg {
    display: flex;
    position: relative;
    transform: translateY(1px);
  }

  cursor: pointer;
`;

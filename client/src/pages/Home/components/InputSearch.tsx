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
        <InputText
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={handlerSearchValue}
        />
        <InputSubmit type="submit" value="Submit" onClick={onClick} />
      </SearchContainer>
    </>
  );
};

export default InputSearch;

const SearchContainer = styled.form`
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

const IconContainer = styled.div`
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

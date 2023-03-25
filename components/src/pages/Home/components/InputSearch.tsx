import styled from '@emotion/styled';
import React, { Component } from 'react';

import { BsSearch } from 'react-icons/bs';

type Props = {
  searchValue: string;
  placeholder?: string;
  handlerSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class InputSearch extends Component<Props> {
  render() {
    const { searchValue, handlerSearchValue, placeholder = 'Search' } = this.props;

    return (
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
      </SearchContainer>
    );
  }
}

const SearchContainer = styled.div`
  display: flex;
  place-items: center;

  width: 100%;
  gap: 10px;

  border-radius: 2rem;
  padding-right: 1.4em;
  background-color: var(--primary-color-400);

  transition: all 0.3s;

  &:focus-within {
    background-color: var(--primary-color-500);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;

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

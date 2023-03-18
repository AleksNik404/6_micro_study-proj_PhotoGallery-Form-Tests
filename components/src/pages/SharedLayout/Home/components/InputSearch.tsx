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
      <SearchContainer className="pole">
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: 0;

  background-color: transparent;
  color: var(--text-color-hover);
`;

const IconContainer = styled.div`
  margin-left: 0.7em;
  height: 0.7em;
  width: 0.7em;

  display: flex;
  place-items: center;

  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 2rem;
  padding-right: 1.4em;
  background-color: var(--primary-color-400);

  transition: all 0.3s;

  &:focus-within {
    background-color: var(--primary-color-500);
  }
`;

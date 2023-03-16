import styled from '@emotion/styled';
import React, { Component } from 'react';

import { BsSearch } from 'react-icons/bs';

type Props = {
  placeholder?: string;
};

type State = {};

export default class InputSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {};

  render() {
    const { placeholder = 'Search' } = this.props;

    return (
      <SearchContainer className="pole">
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <Input type="text" placeholder={placeholder} />
      </SearchContainer>
    );
  }
}

const Input = styled.input`
  width: 100%;
  background-color: transparent;

  outline: 0;
  color: var(--text-color-hover);
`;

const IconContainer = styled.div`
  margin: 0.8em;
  display: flex;
  place-items: center;

  height: 0.7em;
  width: 0.7em;

  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: var(--primary-color-400);
  border-radius: 2rem;

  padding-right: 1.4em;

  transition: all 0.3s;

  &:focus-within {
    background-color: var(--primary-color-500);
  }
`;

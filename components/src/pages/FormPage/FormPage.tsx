import styled from '@emotion/styled';
import React, { Component } from 'react';

import Header from '../../components/Header';
import Toast from '../../components/Toast';
import { Main } from '../../styled/styledComponents';
import { CardsContainer } from '../Home/components';
import { CardItem } from '../Home/components/Card';
import { Cards } from '../Home/components/CardsContainer';
import Form from './components/Form';

type Props = Record<string, never>;
type State = Cards & { toastMessage: string };

class FormPage extends Component<Props, State> {
  state: State = {
    cards: [],
    toastMessage: '',
  };

  addOneCard = (data: CardItem) => {
    this.setState((prev) => {
      return {
        cards: [...prev.cards, data],
        toastMessage: 'Success create card',
      };
    });
  };

  deleteToast = () => {
    this.setState({
      toastMessage: '',
    });
  };

  render() {
    return (
      <>
        <Header namePage="Form Page" />
        <Main>
          <section className="container">
            <FormBlock>
              <Form addOneCard={this.addOneCard} />
              {this.state.toastMessage && (
                <Toast message={this.state.toastMessage} deleteToast={this.deleteToast} />
              )}
            </FormBlock>
            <CardsContainer cards={this.state.cards} />
          </section>
        </Main>
      </>
    );
  }
}

const FormBlock = styled.div`
  margin-bottom: 5rem;
  position: relative;
`;

export default FormPage;

// type inputRefs = Record<string, HTMLInputElement>;

//  manyInputRefs = React.createRef<inputRefs>();
//  selectRef = React.createRef<HTMLSelectElement>();

// setInputsRef = (input: HTMLInputElement) => {
//   const current = { ...this.manyInputRefs.current, [input.name]: input };
//   this.manyInputRefs = { current };
// };

import React, { Component } from 'react';

import Header from '../../components/Header';
import { Main } from '../../styled/styledComponents';
import { CardsContainer } from '../Home/components';
import { CardItem } from '../Home/components/Card';
import { Cards } from '../Home/components/CardsContainer';
import Form from './components/Form';

type Props = Record<string, never>;
type State = Cards;

class FormPage extends Component<Props, State> {
  state: State = {
    cards: [],
  };

  addOneCard = (data: CardItem) => {
    console.log(data);

    this.setState((prev) => {
      return {
        cards: [...prev.cards, data],
      };
    });
  };

  render() {
    return (
      <>
        <Header namePage="Form Page" />
        <Main>
          <section className="container">
            <Form addOneCard={this.addOneCard} />
            <CardsContainer cards={this.state.cards} />
          </section>
        </Main>
      </>
    );
  }
}

export default FormPage;

// type inputRefs = Record<string, HTMLInputElement>;

//  manyInputRefs = React.createRef<inputRefs>();
//  selectRef = React.createRef<HTMLSelectElement>();

// setInputsRef = (input: HTMLInputElement) => {
//   const current = { ...this.manyInputRefs.current, [input.name]: input };
//   this.manyInputRefs = { current };
// };

import React, { Component } from 'react';

import Header from '../../components/Header';
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
        <main>
          <section className="container">
            <Form addOneCard={this.addOneCard} />
            <CardsContainer cards={this.state.cards} />
          </section>
        </main>
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

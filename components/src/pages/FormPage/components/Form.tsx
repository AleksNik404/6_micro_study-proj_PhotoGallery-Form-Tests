import React, { Component } from 'react';

import { FormInputField, FormSelectFiled } from '.';
import { CardItem } from '../../Home/components/Card';

import { INPUT_OPTIONS } from '../../../utils/constants';
import { isEmpty as isEmpty } from '../../../utils/utils';
import { dateValidate, discountValidate, termValidate } from '../../../utils/validations';
import { fileValidate, selectValidate, textValidate } from '../../../utils/validations';

type State = {
  errors: Record<string, string>;
};

type Props = {
  addOneCard: (data: CardItem) => void;
};

const initialState = {
  errors: {},
};

class Form extends Component<Props, State> {
  state: State = initialState;

  tata = React.createRef<State>();
  inputNameRef = React.createRef<HTMLInputElement>();
  inputReleaseDateRef = React.createRef<HTMLInputElement>();
  inputFileRef = React.createRef<HTMLInputElement>();

  inputCheckboxPSRef = React.createRef<HTMLInputElement>();
  inputDiscountTrueRef = React.createRef<HTMLInputElement>();
  inputDiscountFalseRef = React.createRef<HTMLInputElement>();

  inputCurrencyRef = React.createRef<HTMLSelectElement>();
  formRef = React.createRef<HTMLFormElement>();

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.resetStateErrors();
    const errors = this.validateRefs();

    if (!isEmpty(errors)) {
      this.setState({ errors });
      return;
    }

    this._addCard();
    this.formRef.current?.reset();
  };

  validateRefs() {
    const errors: Record<string, string> = {};

    termValidate(this.inputCheckboxPSRef.current, errors);
    textValidate(this.inputNameRef.current, errors);
    dateValidate(this.inputReleaseDateRef.current, errors);
    selectValidate(this.inputCurrencyRef.current, errors);
    fileValidate(this.inputFileRef.current, errors);
    discountValidate(this.inputDiscountTrueRef.current, this.inputDiscountFalseRef.current, errors);

    return errors;
  }

  _addCard() {
    const image = this.inputFileRef.current!.files![0];
    const discountPercentage = this.inputDiscountTrueRef.current!.checked
      ? Number(this.inputDiscountTrueRef.current!.value)
      : 0;

    this.props.addOneCard({
      id: crypto.randomUUID(),
      name: this.inputNameRef.current!.value,
      releaseDate: this.inputReleaseDateRef.current!.value,
      price: Number(this.inputCurrencyRef.current!.value),
      image: URL.createObjectURL(image),
      discountPercentage,
    });
  }

  resetStateErrors() {
    this.setState(initialState);
  }

  render() {
    const { name, releaseDate, price, check, discount, image } = this.state.errors;

    return (
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        onSubmit={this.onSubmit}
        noValidate
        ref={this.formRef}
      >
        <FormInputField type="text" name="name" InputRef={this.inputNameRef} ErrorMessage={name} />
        <FormInputField
          type="date"
          name="releaseDate"
          InputRef={this.inputReleaseDateRef}
          ErrorMessage={releaseDate}
        />
        <FormSelectFiled
          name="price"
          defaultValue="Select price"
          InputRef={this.inputCurrencyRef}
          list={INPUT_OPTIONS}
          ErrorMessage={price}
        />
        <FormInputField
          type="checkbox"
          name="check"
          InputRef={this.inputCheckboxPSRef}
          ErrorMessage={check}
        />
        <FormInputField
          type="radio"
          name="discount"
          label="None"
          InputRef={this.inputDiscountFalseRef}
          ErrorMessage={discount}
        />
        <FormInputField
          type="radio"
          name="discount"
          value={25}
          label="25%"
          InputRef={this.inputDiscountTrueRef}
          ErrorMessage={discount}
        />

        <label htmlFor="image">SELECT FILE</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          ref={this.inputFileRef}
          // hidden
        />
        {image}
        <input type="submit" />
        <input type="reset" />
      </form>
    );
  }
}

export default Form;

// type inputRefs = Record<string, HTMLInputElement>;

//  manyInputRefs = React.createRef<inputRefs>();
//  selectRef = React.createRef<HTMLSelectElement>();

// setInputsRef = (input: HTMLInputElement) => {
//   const current = { ...this.manyInputRefs.current, [input.name]: input };
//   this.manyInputRefs = { current };
// };

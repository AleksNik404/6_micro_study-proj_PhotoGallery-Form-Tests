import React, { Component } from 'react';

import { FormInputField, FormSelectFiled } from '.';
import { CardItem } from '../../Home/components/Card';

import { INPUT_OPTIONS } from '../../../utils/constants';
import { isEmpty } from '../../../utils/utils';
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

  inputNameRef = React.createRef<HTMLInputElement>();
  inputReleaseDateRef = React.createRef<HTMLInputElement>();
  inputFileRef = React.createRef<HTMLInputElement>();

  inputCheckboxPSRef = React.createRef<HTMLInputElement>();
  inputDiscountTrueRef = React.createRef<HTMLInputElement>();
  inputDiscountFalseRef = React.createRef<HTMLInputElement>();

  inputCurrencyRef = React.createRef<HTMLSelectElement>();
  formRef = React.createRef<HTMLFormElement>();

  resetStateErrors() {
    this.setState(initialState);
  }

  hah = () => {
    if (
      !this.inputNameRef.current ||
      !this.inputReleaseDateRef.current ||
      !this.inputCurrencyRef.current ||
      !this.inputCheckboxPSRef.current ||
      !this.inputDiscountTrueRef.current ||
      !this.inputFileRef.current
    ) {
      return true;
    }

    this.inputNameRef.current;
    this.inputReleaseDateRef.current;
    this.inputCurrencyRef.current;
    this.inputCheckboxPSRef.current;
    this.inputDiscountTrueRef.current;
    this.inputFileRef.current;
    return false;
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.resetStateErrors();

    if (this.hah()) return;

    const errors: Record<string, string> = {};

    textValidate(this.inputNameRef.current, errors);
    dateValidate(this.inputReleaseDateRef.current, errors);
    selectValidate(this.inputCurrencyRef.current, errors);
    termValidate(this.inputCheckboxPSRef.current, errors);
    discountValidate(this.inputDiscountTrueRef.current, this.inputDiscountFalseRef.current, errors);
    fileValidate(this.inputFileRef.current, errors);

    if (isEmpty(errors)) {
      this.submitCard();
      this.formRef.current?.reset();
    } else this.setState({ errors });
  };

  submitCard = () => {
    let url = '';
    if (this.inputFileRef.current?.files) {
      const file = this.inputFileRef.current.files[0];
      url = URL.createObjectURL(file);
    }

    const discountPercentage = this.inputDiscountTrueRef.current?.checked
      ? Number(this.inputDiscountTrueRef.current?.value)
      : 0;

    const cardData = {
      id: crypto.randomUUID(),
      name: this.inputNameRef.current?.value || 'test',
      image: url,
      price: Number(this.inputCurrencyRef.current?.value),
      discountPercentage,
      releaseDate: this.inputReleaseDateRef.current?.value,
    };

    this.props.addOneCard(cardData);
  };

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

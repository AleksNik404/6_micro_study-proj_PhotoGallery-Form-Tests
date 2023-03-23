import React, { Component } from 'react';

import {
  dateValidate,
  fileValidate,
  selectValidate,
  textValidate,
} from '../../../utils/validations';
import FormInputField from './FormInputField';
import FormSelectFiled from './FormSelectFiled';

const options = ['EUR', '$', 'RUB'];

const enum nameFields {
  TITLE = 'name',
  DATE = 'releaseDate',
  CURRENCY = 'currency',
  PC = 'PC',
  PS = 'PS',
  DISCOUNT = 'discount',
}

type Props = Record<string, never>;
type State = {
  errors: Partial<Record<string, string>>;
};

class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  inputNameRef = React.createRef<HTMLInputElement>();
  inputCurrencyRef = React.createRef<HTMLSelectElement>();
  inputReleaseDateRef = React.createRef<HTMLInputElement>();

  inputCheckboxPCRef = React.createRef<HTMLInputElement>();
  inputCheckboxPSRef = React.createRef<HTMLInputElement>();

  inputDiscountTrueRef = React.createRef<HTMLInputElement>();
  inputDiscountFalseRef = React.createRef<HTMLInputElement>();
  inputFileRef = React.createRef<HTMLInputElement>();

  updateState = (name: string, message: string) => {
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: message,
      },
    }));

    // this.setState({ errors: { [lolg]: message } });
  };

  resetState() {
    this.setState((prev) => ({ errors: {} }));
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.resetState();

    textValidate(this.inputNameRef.current, this.updateState);
    dateValidate(this.inputReleaseDateRef.current, this.updateState);
    selectValidate(this.inputCurrencyRef.current, this.updateState);
    // console.log(this.inputCheckboxPCRef);
    // console.log(this.inputCheckboxPSRef);
    // console.log(this.inputDiscountTrueRef);
    // console.log(this.inputDiscountFalseRef);
    fileValidate(this.inputFileRef.current, this.updateState);
    console.log(this.inputFileRef);
  };

  render() {
    const { name, releaseDate, currency, PC, PS, discount, image } = this.state.errors;
    return (
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        onSubmit={this.onSubmit}
        noValidate
      >
        <FormInputField type="text" name="name" InputRef={this.inputNameRef} ErrorMessage={name} />
        <FormInputField
          type="date"
          name="releaseDate"
          InputRef={this.inputReleaseDateRef}
          ErrorMessage={releaseDate}
        />
        <FormSelectFiled
          name="currency"
          defaultValue="Select currency"
          InputRef={this.inputCurrencyRef}
          list={options}
          ErrorMessage={currency}
        />
        <FormInputField
          type="checkbox"
          name="PC"
          InputRef={this.inputCheckboxPCRef}
          ErrorMessage={PC}
        />
        <FormInputField
          type="checkbox"
          name="PS"
          InputRef={this.inputCheckboxPSRef}
          ErrorMessage={PS}
        />
        <FormInputField
          type="radio"
          name="discount"
          InputRef={this.inputDiscountTrueRef}
          ErrorMessage={discount}
        />
        <FormInputField
          type="radio"
          name="discount"
          InputRef={this.inputDiscountFalseRef}
          ErrorMessage={discount}
        />
        {/* <FormInputField type="file" name="ReleaseDate" ref={this.inputReleaseDateRef} /> */}
        <label htmlFor="image">SELECT FILE</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          ref={this.inputFileRef}
          hidden
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

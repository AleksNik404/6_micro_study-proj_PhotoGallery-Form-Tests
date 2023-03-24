import React, { Component } from 'react';
import styled from '@emotion/styled';

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

  // testRef: React.RefObject<Record<string, HTMLInputElement>>;
  // constructor(props: Props) {
  //   super(props);
  //   this.testRef = React.createRef<Record<string, HTMLInputElement>>();
  //   this.testRef = { current: {} };
  // }

  // setRef = (el: HTMLInputElement | null) => {
  //   if (this.testRef.current && el) {
  //     this.testRef.current[el.name] = el;
  //   }
  // };

  inputName = React.createRef<HTMLInputElement>();
  inputReleaseDate = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();

  inputCheckboxPrice = React.createRef<HTMLInputElement>();
  inputDiscountNone = React.createRef<HTMLInputElement>();
  inputDiscountTrue = React.createRef<HTMLInputElement>();

  inputCurrency = React.createRef<HTMLSelectElement>();
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

    termValidate(this.inputCheckboxPrice.current, errors);
    textValidate(this.inputName.current, errors);
    dateValidate(this.inputReleaseDate.current, errors);
    selectValidate(this.inputCurrency.current, errors);
    fileValidate(this.inputFile.current, errors);
    discountValidate(this.inputDiscountNone.current, this.inputDiscountTrue.current, errors);

    return errors;
  }

  _addCard() {
    const image = this.inputFile.current!.files![0];
    const discountPercentage = this.inputDiscountNone.current!.checked
      ? Number(this.inputDiscountNone.current!.value)
      : 0;

    this.props.addOneCard({
      id: crypto.randomUUID(),
      name: this.inputName.current!.value,
      releaseDate: this.inputReleaseDate.current!.value,
      price: Number(this.inputCurrency.current!.value),
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
      <FormStyled onSubmit={this.onSubmit} noValidate ref={this.formRef}>
        {/* <input type="text" name="jaja" ref={this.setRef} /> */}
        <FormInputField name="name" InputRef={this.inputName} ErrorMessage={name} />
        <FormInputField
          type="date"
          name="releaseDate"
          InputRef={this.inputReleaseDate}
          ErrorMessage={releaseDate}
        />
        <FormSelectFiled
          name="price"
          defaultValue="Select price"
          InputRef={this.inputCurrency}
          list={INPUT_OPTIONS}
          ErrorMessage={price}
        />
        <FormInputField
          type="checkbox"
          name="check"
          InputRef={this.inputCheckboxPrice}
          ErrorMessage={check}
        />
        <FormInputField
          type="radio"
          name="discount"
          label="None"
          InputRef={this.inputDiscountTrue}
          ErrorMessage={discount}
        />
        <FormInputField
          type="radio"
          name="discount"
          value={25}
          label="25%"
          InputRef={this.inputDiscountNone}
          ErrorMessage={discount}
        />

        <label htmlFor="image">SELECT FILE</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          ref={this.inputFile}
          // hidden
        />
        {image}
        <input type="submit" />
        <input type="reset" />
      </FormStyled>
    );
  }
}

export default Form;

const FormStyled = styled.form`
  display: flex;
`;

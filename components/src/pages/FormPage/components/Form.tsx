import React, { Component } from 'react';
import styled from '@emotion/styled';

import { FormCheckBox, FormFile, FormInput, FormSelect, FormSwitcher } from '.';
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

    console.log(errors);

    return errors;
  }

  _addCard() {
    const image = this.inputFile.current!.files![0];
    const discountPercentage = this.inputDiscountTrue.current!.checked
      ? Number(this.inputDiscountTrue.current!.value)
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
      <Wrapper>
        <FormStyled onSubmit={this.onSubmit} noValidate ref={this.formRef}>
          {/* <input type="text" name="jaja" ref={this.setRef} /> */}
          <FormInput
            name="name"
            InputRef={this.inputName}
            label="Title"
            placeholder="Product Name"
            ErrorMessage={name}
          />
          <FormInput
            type="date"
            name="releaseDate"
            label="Release Date"
            InputRef={this.inputReleaseDate}
            ErrorMessage={releaseDate}
          />
          <FormSelect
            name="price"
            defaultValue="Select price"
            label="Currency"
            InputRef={this.inputCurrency}
            list={INPUT_OPTIONS}
            ErrorMessage={price}
          />
          <FormSwitcher
            refNone={this.inputDiscountNone}
            refTrue={this.inputDiscountTrue}
            label="Choise discount"
            name="discount"
            value={25}
            ErrorMessage={discount}
          />

          <FormFile
            name="image"
            fileRef={this.inputFile}
            label="Select image"
            ErrorMessage={image}
          />

          <FormCheckBox
            name="check"
            label="i agree to the xdd Terms"
            checkboxRef={this.inputCheckboxPrice}
            ErrorMessage={check}
          />

          <Button type="submit">Submit</Button>
        </FormStyled>
        {/* <Card
          cardData={{
            id: 'test',
            image: 'awdaw',
            name: this.inputName.current?.value || '',
            price: 39,
            discountPercentage: 10,
          }}
        /> */}
      </Wrapper>
    );
  }
}

export default Form;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const FormStyled = styled.form`
  display: grid;
  gap: 30px 20px;
  padding: 30px 20px;

  background-color: rgba(0, 70, 140, 0.1);

  align-items: center;
  border-radius: 2px;

  input,
  select {
    height: 2.5rem;
    padding: 0 15px;

    color-scheme: dark;
    color: inherit;
    background-color: #10181f;
    border: 1px solid #94a3b878;

    cursor: pointer;
    outline: none;
    &:focus {
      border-color: #60a5fa;
    }
  }

  /* grid-template-columns: repeat(3, calc((100% - 2 * 20px) / 3)); */
  /* @media (max-width: 740px) { */
  grid-template-columns: repeat(2, calc((100% - 1 * 20px) / 2));
  /* } */
`;

const Button = styled.button`
  min-width: 200px;
  justify-self: center;

  height: 30px;
  grid-column: 1 / -1;
  cursor: pointer;
`;

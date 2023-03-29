import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { FormCheckBox, FormFile, FormInput, FormSelect, FormSwitcher } from '.';
import { CardItem } from '../../Home/components/Card';

import { INPUT_OPTIONS } from '../../../utils/constants';
import { isEmpty } from '../../../utils/utils';
import { dateValidate, discountValidate, termValidate } from '../../../utils/validations';
import { fileValidate, selectValidate, textValidate } from '../../../utils/validations';

type Props = {
  addOneCard: (data: CardItem) => void;
};

const Form = ({ addOneCard }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputName = useRef<HTMLInputElement>(null);
  const inputReleaseDate = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const inputCheckboxPrice = useRef<HTMLInputElement>(null);
  const inputDiscountNone = useRef<HTMLInputElement>(null);
  const inputDiscountTrue = useRef<HTMLInputElement>(null);

  const inputCurrency = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    resetStateErrors();
    const errors = validateRefs();

    if (!isEmpty(errors)) {
      setErrors(errors);
      return;
    }

    _addCard();
    formRef.current?.reset();
  };

  function validateRefs() {
    const errors: Record<string, string> = {};

    termValidate(inputCheckboxPrice.current, errors);
    textValidate(inputName.current, errors);
    dateValidate(inputReleaseDate.current, errors);
    selectValidate(inputCurrency.current, errors);
    fileValidate(inputFile.current, errors);
    discountValidate(inputDiscountNone.current, inputDiscountTrue.current, errors);

    return errors;
  }

  function _addCard() {
    const image = inputFile.current!.files![0];
    const discountPercentage = inputDiscountTrue.current!.checked
      ? Number(inputDiscountTrue.current!.value)
      : 0;

    addOneCard({
      id: crypto.randomUUID(),
      name: inputName.current!.value,
      releaseDate: inputReleaseDate.current!.value,
      price: Number(inputCurrency.current!.value),
      image: URL.createObjectURL(image),
      discountPercentage,
    });
  }

  function resetStateErrors() {
    setErrors({});
  }

  const { name, releaseDate, price, check, discount, image } = errors;
  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit} noValidate ref={formRef}>
        <FormInput
          name="name"
          InputRef={inputName}
          label="Title"
          placeholder="Product Name"
          ErrorMessage={name}
        />
        <FormInput
          type="date"
          name="releaseDate"
          label="Release Date"
          InputRef={inputReleaseDate}
          ErrorMessage={releaseDate}
        />
        <FormSelect
          name="price"
          defaultValue="Select price"
          label="Price"
          InputRef={inputCurrency}
          list={INPUT_OPTIONS}
          ErrorMessage={price}
        />
        <FormSwitcher
          refNone={inputDiscountNone}
          refTrue={inputDiscountTrue}
          label="Make a 25% discount"
          name="discount"
          value={25}
          ErrorMessage={discount}
        />

        <FormFile name="image" fileRef={inputFile} label="Select image" ErrorMessage={image} />

        <FormCheckBox
          name="check"
          label="i agree to the xdd Terms"
          checkboxRef={inputCheckboxPrice}
          ErrorMessage={check}
        />

        <Button type="submit">Submit</Button>
      </FormStyled>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 1 * 20px) / 2));
  gap: 30px 20px;
  padding: 30px 20px;

  background-color: #10171e;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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

  @media (max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  max-width: 300px;
  padding: 0 10px;
  margin-top: 30px;

  font-weight: 400;
  letter-spacing: 2px;
  color: inherit;

  background: linear-gradient(
    90deg,
    rgba(135, 17, 43, 0.5) 0%,
    rgba(225, 29, 71, 0.5) 37%,
    rgba(180, 23, 58, 0.5) 65%,
    rgba(135, 17, 43, 0.5) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 20px;

    background: linear-gradient(
      90deg,
      rgba(135, 17, 43, 0.6) 0%,
      rgba(225, 29, 71, 0.6) 37%,
      rgba(180, 23, 58, 0.6) 65%,
      rgba(135, 17, 43, 0.6) 100%
    );
  }
  &:active {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 10px;
  }

  justify-self: center;
  grid-column: 1 / -1;
  cursor: pointer;
`;

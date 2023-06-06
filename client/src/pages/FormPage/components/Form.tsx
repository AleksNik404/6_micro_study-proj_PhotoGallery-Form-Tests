import { useEffect } from 'react';
import styled from '@emotion/styled';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormCheckBox, FormFile, FormInput, FormSelect, FormSwitcher } from '.';

import { ASPECT_RATION_OPTIONS } from '../../../utils/constants';
import { validation } from '../../../utils/validations';
import { CardItem } from '../../../components/Card';
import { SubmitButton } from '../../../styled/SubmitButton';
import { formatDate } from '../../../utils/utils';

export type FormData = {
  image: FileList;
  userName: string;
  createdAt: string;
  imageAspectRatio: string;
  useDateFormatting: string;

  check: boolean;
};

type FormProps = {
  addOneCard: (data: CardItem) => void;
};

const Form = ({ addOneCard }: FormProps) => {
  const methods = useForm<FormData>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      check: false,
    },
  });
  const { isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    methods.reset();
  }, [isSubmitSuccessful, methods]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { image: fileList, imageAspectRatio: ratio, useDateFormatting, createdAt } = data;
    const created_at = useDateFormatting === 'true' ? formatDate(createdAt) : createdAt;

    const image = URL.createObjectURL(fileList[0]);
    const id = crypto.randomUUID();
    const [x, y] = ratio.split(':').map(Number);

    addOneCard({ ...data, image, id, imageAspectRatio: [x, y], created_at });
  };

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <FormStyled onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput
            name="userName"
            label="User Name"
            placeholder="Author Name"
            validate={validation.name}
          />
          <FormInput
            name="createdAt"
            label="Image creation date"
            type="date"
            validate={validation.releaseDate}
          />
          <FormSelect
            name="imageAspectRatio"
            label="Image Aspect Ratio"
            defaultValue="Select Aspect Ratio"
            list={ASPECT_RATION_OPTIONS}
            validate={validation.aspectRatio}
          />
          <FormSwitcher
            label="Format date for image?"
            name="useDateFormatting"
            value={25}
            validate={validation.useDateFormatting}
          />
          <FormFile name="image" label="Select image" validate={validation.image} />
          <FormCheckBox name="check" label="i agree to the xdd Terms" validate={validation.check} />

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormStyled>
      </Wrapper>
    </FormProvider>
  );
};

export default Form;

const Wrapper = styled.div`
  max-width: 50rem;
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
  border-radius: var(--border-radius-sm);

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

  @media (max-width: 45em) {
    grid-template-columns: 1fr;
  }
`;

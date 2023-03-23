import React from 'react';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLSelectElement>;
  label?: string;
  list: string[];
  defaultValue: string;

  ErrorMessage?: string;
}

const FormSelectFiled = (props: InputProps) => {
  const { defaultValue, name, InputRef, list, ErrorMessage = '', label = name } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select ref={InputRef} name={name} id={name} defaultValue={defaultValue}>
        <option value="" hidden>
          {defaultValue}
        </option>

        {list.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {ErrorMessage && ErrorMessage}
    </div>
  );
};

export default FormSelectFiled;

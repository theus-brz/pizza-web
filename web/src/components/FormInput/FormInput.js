import React from 'react';

import PropTypes from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage/ErrorMessage';

import { FormInputWrapper, FormInputField } from './FormInputStyles';

function FormInput(props) {
  const {
    type,
    name,
    onChange,
    onBlur,
    value,
    error,
    errorMessage,
    placeholder,
  } = props;

  return (
    <FormInputWrapper>
      <FormInputField
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        required
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormInputWrapper>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  error: false,
  errorMessage: '',
};

export default FormInput;

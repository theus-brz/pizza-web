import React from 'react';
import InputMask from 'react-input-mask';

import PropTypes from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage/ErrorMessage';

import { MaskedInputWrapper, MaskedInputField } from './MaskedInputStyles';

const phoneMask = '(99) 99999 9999';

function MaskedInput(props) {
  const {
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
    errorMessage,
    placeholder,
  } = props;

  return (
    <MaskedInputWrapper>
      <InputMask
        name={name}
        mask={phoneMask}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      >
        {() => (
          <MaskedInputField
            name={name}
            type={type}
            error={error}
            placeholder={placeholder}
          />
        )}
      </InputMask>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </MaskedInputWrapper>
  );
}

MaskedInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

MaskedInput.defaultProps = {
  error: false,
  errorMessage: '',
};

export default MaskedInput;

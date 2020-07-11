import React from 'react';
import InputMask from 'react-input-mask';

import PropTypes from 'prop-types';

function MaskedInput(props) {
  const { type, name, value, onChange, onBlur } = props;

  return (
    <InputMask
      type={type}
      name={name}
      mask="(99) 99999-9999"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
}

MaskedInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default MaskedInput;

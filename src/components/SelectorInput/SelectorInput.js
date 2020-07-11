import React from 'react';

import PropTypes from 'prop-types';

function renderOptions(options) {
  return options.map(option => {
    return (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    );
  });
}

function SelectorInput(props) {
  const { name, value, onChange, onBlur, options } = props;

  return (
    <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
      {renderOptions(options)}
    </select>
  );
}

SelectorInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SelectorInput;

import React from 'react';

import PropTypes from 'prop-types';

import {
  SelectorWrapper,
  SelectorTitle,
  SelectorField,
  SelectorOption,
} from './SelectorInputStyles';

function renderOptions(options) {
  return options.map(option => (
    <SelectorOption value={option.value} key={option.value}>
      {option.label}
    </SelectorOption>
  ));
}

function SelectorInput(props) {
  const { title, name, value, onChange, onBlur, options } = props;

  return (
    <SelectorWrapper>
      <SelectorTitle htmlFor={name}>{title}</SelectorTitle>
      <SelectorField
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {renderOptions(options)}
      </SelectorField>
    </SelectorWrapper>
  );
}

SelectorInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SelectorInput;

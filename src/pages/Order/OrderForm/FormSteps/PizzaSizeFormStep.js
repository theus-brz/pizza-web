import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';

function PizzaSizeFormStep(props) {
  const {
    values,
    handleChange,
    handleBlur,
    pizzaValues: { sizes },
  } = props;

  return (
    <Card title="Tamanho da Pizza">
      <SelectorInput
        placeholder="Tamanho"
        name="pizza.size"
        value={values.pizza.size}
        onChange={handleChange}
        onBlur={handleBlur}
        options={sizes}
      />
    </Card>
  );
}

PizzaSizeFormStep.propTypes = {
  pizzaValues: PropTypes.shape({
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  values: PropTypes.shape({
    pizza: PropTypes.shape({
      size: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PizzaSizeFormStep;

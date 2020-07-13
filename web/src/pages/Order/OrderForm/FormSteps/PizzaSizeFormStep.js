import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';

const {
  FORM_STEPS: {
    PIZZA_SIZE_STEP: { TITLE, PIZZA_SIZE_INPUT },
  },
} = ORDER_PAGE;

function PizzaSizeFormStep(props) {
  const {
    values,
    handleChange,
    handleBlur,
    pizzaValues: { sizes },
  } = props;

  return (
    <Card title={TITLE}>
      <SelectorInput
        title={PIZZA_SIZE_INPUT}
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

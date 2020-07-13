import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';

const {
  FORM_STEPS: {
    PIZZA_PASTA_STEP: { TITLE, PIZZA_PASTA_INPUT, PIZZA_CRUST_INPUT },
  },
} = ORDER_PAGE;

function PizzaPastaFormStep(props) {
  const {
    values,
    handleChange,
    handleBlur,
    pizzaValues: { pastas, crusts },
  } = props;
  return (
    <Card title={TITLE}>
      <SelectorInput
        title={PIZZA_PASTA_INPUT}
        name="pizza.pasta"
        value={values.pizza.pasta}
        onChange={handleChange}
        onBlur={handleBlur}
        options={pastas}
      />

      <SelectorInput
        title={PIZZA_CRUST_INPUT}
        name="pizza.crust"
        value={values.pizza.crust}
        onChange={handleChange}
        onBlur={handleBlur}
        options={crusts}
      />
    </Card>
  );
}

PizzaPastaFormStep.propTypes = {
  pizzaValues: PropTypes.shape({
    pastas: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    crusts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  values: PropTypes.shape({
    pizza: PropTypes.shape({
      pasta: PropTypes.string.isRequired,
      crust: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PizzaPastaFormStep;

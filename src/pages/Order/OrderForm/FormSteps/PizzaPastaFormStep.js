import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';

function PizzaPastaFormStep(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    pizzaValues: { pastas, crusts },
  } = props;
  return (
    <Card title="Massa da Pizza">
      <p>Massa</p>
      <SelectorInput
        name="pizza.pasta"
        value={values.pizza.pasta}
        onChange={handleChange}
        onBlur={handleBlur}
        options={pastas}
      />
      {errors.pizza &&
        errors.pizza.pasta &&
        touched.pizza.pasta &&
        errors.pizza.pasta}

      <p>Borda</p>
      <SelectorInput
        name="pizza.crust"
        value={values.pizza.crust}
        onChange={handleChange}
        onBlur={handleBlur}
        options={crusts}
      />
      {errors.pizza &&
        errors.pizza.crust &&
        touched.pizza.crust &&
        errors.pizza.crust}
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
  touched: PropTypes.shape({
    pizza: PropTypes.shape({
      pasta: PropTypes.string.isRequired,
      crust: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    pizza: PropTypes.shape({
      pasta: PropTypes.string.isRequired,
      crust: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PizzaPastaFormStep;

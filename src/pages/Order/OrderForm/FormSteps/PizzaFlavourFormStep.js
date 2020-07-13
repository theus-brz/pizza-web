import React from 'react';

import PropTypes from 'prop-types';

import SelectorInput from '~/components/SelectorInput/SelectorInput';

function PizzaFlavourFormStep(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    pizzaValues: { flavours, todaysSpecial },
  } = props;
  return (
    <div>
      <p>
        Aviso: Se você selecionar o sabor{' '}
        <strong>{todaysSpecial.value} </strong>
        irá render pontos de benefício para você :)
      </p>

      <p>Sabor da Pizza</p>

      <p>Sabor</p>
      <SelectorInput
        name="pizza.flavour"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.pizza.flavour}
        options={flavours}
      />
      {errors.pizza &&
        errors.pizza.flavour &&
        touched.pizza.flavour &&
        errors.pizza.flavour}
    </div>
  );
}

PizzaFlavourFormStep.propTypes = {
  pizzaValues: PropTypes.shape({
    flavours: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    todaysSpecial: PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  values: PropTypes.shape({
    pizza: PropTypes.shape({
      flavour: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  touched: PropTypes.shape({
    pizza: PropTypes.shape({
      flavour: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    pizza: PropTypes.shape({
      flavour: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PizzaFlavourFormStep;

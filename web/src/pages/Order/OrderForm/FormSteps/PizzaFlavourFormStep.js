import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';
import WarningCard from '~/components/WarningCard/WarningCard';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';

const {
  FORM_STEPS: {
    PIZZA_FLAVOUR_STEP: {
      TITLE,
      PIZZA_FLAVOUR_INPUT,
      WARNING: { FIRST_PART, LAST_PART, BENEFIT },
    },
  },
} = ORDER_PAGE;

function PizzaFlavourFormStep(props) {
  const {
    values,
    handleChange,
    handleBlur,
    pizzaValues: { flavours, todaysSpecial },
  } = props;
  return (
    <Card title={TITLE}>
      <WarningCard>
        {FIRST_PART}
        <strong>{todaysSpecial.value}</strong>
        {LAST_PART}
        <strong>{BENEFIT}</strong>
      </WarningCard>

      <SelectorInput
        title={PIZZA_FLAVOUR_INPUT}
        name="pizza.flavour"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.pizza.flavour}
        options={flavours}
      />
    </Card>
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
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PizzaFlavourFormStep;

import React from 'react';

import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import SelectorInput from '~/components/SelectorInput/SelectorInput';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';

const {
  FORM_STEPS: {
    PAYMENT_STEP: { TITLE, PAYMENT_METHOD_INPUT, DELIVERY_INPUT },
  },
} = ORDER_PAGE;

function PaymentFormStep(props) {
  const {
    values,
    handleChange,
    handleBlur,
    orderValues: { paymentMethods, deliveryOptions },
  } = props;
  return (
    <Card title={TITLE}>
      <SelectorInput
        title={PAYMENT_METHOD_INPUT}
        name="payment"
        value={values.payment}
        onChange={handleChange}
        onBlur={handleBlur}
        options={paymentMethods}
      />

      <SelectorInput
        title={DELIVERY_INPUT}
        name="delivery"
        value={values.delivery}
        onChange={handleChange}
        onBlur={handleBlur}
        options={deliveryOptions}
      />
    </Card>
  );
}

PaymentFormStep.propTypes = {
  orderValues: PropTypes.shape({
    paymentMethods: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    deliveryOptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  values: PropTypes.shape({
    delivery: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PaymentFormStep;

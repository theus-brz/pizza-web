import React from 'react';

import PropTypes from 'prop-types';

import SelectorInput from '~/components/SelectorInput/SelectorInput';

function PaymentFormStep(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    orderValues: { paymentMethods, deliveryOptions },
  } = props;
  return (
    <div>
      <p>Forma de pagamento</p>

      <p>Método de pagamento</p>
      <SelectorInput
        name="payment"
        value={values.payment}
        onChange={handleChange}
        onBlur={handleBlur}
        options={paymentMethods}
      />
      {errors.payment && touched.payment && errors.payment}

      <p>Entrega</p>
      <SelectorInput
        name="delivery"
        value={values.delivery}
        onChange={handleChange}
        onBlur={handleBlur}
        options={deliveryOptions}
      />
      {errors.delivery && touched.delivery && errors.delivery}
    </div>
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
  touched: PropTypes.shape({
    delivery: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    delivery: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PaymentFormStep;

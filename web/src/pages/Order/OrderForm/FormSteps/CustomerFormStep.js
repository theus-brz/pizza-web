import React from 'react';

import idx from 'idx';
import PropTypes from 'prop-types';

import Card from '~/components/Card/Card';
import FormInput from '~/components/FormInput/FormInput';
import MaskedInput from '~/components/MaskedInput/MaskedInput';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';

const {
  FORM_STEPS: {
    CUSTOMER_STEP: { TITLE, NAME_INPUT, PHONE_INPUT, ADDRESS_INPUT },
  },
} = ORDER_PAGE;

function CustomerFormStep(props) {
  const { values, errors, touched, handleChange, handleBlur } = props;

  function thereIsNameError() {
    return (
      idx(errors, _ => _.customer.name) && idx(touched, _ => _.customer.name)
    );
  }

  function thereIsPhoneError() {
    return (
      idx(errors, _ => _.customer.phone) && idx(touched, _ => _.customer.phone)
    );
  }

  function thereIsAddressError() {
    return (
      idx(errors, _ => _.customer.address) &&
      idx(touched, _ => _.customer.address)
    );
  }

  return (
    <Card title={TITLE}>
      <FormInput
        placeholder={NAME_INPUT}
        type="text"
        name="customer.name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.name}
        error={thereIsNameError()}
        errorMessage={idx(errors, _ => _.customer.name)}
      />

      <MaskedInput
        placeholder={PHONE_INPUT}
        type="tel"
        name="customer.phone"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.phone}
        error={thereIsPhoneError()}
        errorMessage={idx(errors, _ => _.customer.phone)}
      />

      <FormInput
        placeholder={ADDRESS_INPUT}
        type="text"
        name="customer.address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.address}
        error={thereIsAddressError()}
        errorMessage={idx(errors, _ => _.customer.address)}
      />
    </Card>
  );
}

CustomerFormStep.propTypes = {
  values: PropTypes.shape({
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  touched: PropTypes.shape({
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default CustomerFormStep;

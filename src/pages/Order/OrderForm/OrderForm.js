import React, { useState } from 'react';

import { Formik } from 'formik';

import { PIZZA } from '~/constants';

import OrderFormStepController from './OrderFormStepController';

const { SIZE, PASTA, CRUST, FLAVOUR_AMOUNT } = PIZZA;

function OrderForm() {
  const [formStep, setFormStep] = useState(1);

  const formValues = {
    customer: { name: '', phone: '', address: '' },
    pizza: {
      size: SIZE[0].value,
      pasta: PASTA[0].value,
      crust: CRUST[0].value,
      flavour: '',
      flavourAmount: FLAVOUR_AMOUNT[0].value,
    },
    payment: '',
    delivery: '',
  };

  return (
    <Formik
      initialValues={formValues}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {OrderFormStepController(
            formStep,
            values,
            errors,
            touched,
            handleChange,
            handleBlur
          )}

          {formStep > 1 && (
            <button
              type="button"
              onClick={() => setFormStep(formStep - 1)}
              disabled={isSubmitting}
            >
              Voltar
            </button>
          )}

          {formStep < 5 && (
            <button
              type="button"
              onClick={() => setFormStep(formStep + 1)}
              disabled={isSubmitting}
            >
              Próximo
            </button>
          )}

          {formStep === 5 && (
            <button type="submit" disabled={isSubmitting}>
              Finalizar
            </button>
          )}
        </form>
      )}
    </Formik>
  );
}

export default OrderForm;

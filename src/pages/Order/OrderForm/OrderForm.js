import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik } from 'formik';
import idx from 'idx';

import ActionButton from '~/components/ActionButton/ActionButton';
import Loading from '~/components/Loading/Loading';
import { finishOrderRequest } from '~/store/modules/order/actions';
import { isObjEmpty, nameRegexTest, phoneRegexTest } from '~/utils';

import OrderFormStepController from './OrderFormStepController';
import { OrderFormButtonArea } from './OrderFormStyles';

function OrderForm() {
  const [formStep, setFormStep] = useState(1);
  const pizzaValues = useSelector(state => state.pizza.data);
  const pizzaLoading = useSelector(state => state.pizza.loading);
  const orderValues = useSelector(state => state.order.data);
  const orderLoading = useSelector(state => state.order.loading);

  const dispatch = useDispatch();

  if (pizzaLoading || orderLoading) {
    return <Loading />;
  }

  const { sizes, pastas, crusts, flavours } = pizzaValues;
  const { deliveryOptions, paymentMethods } = orderValues;
  const formValues = {
    customer: { name: '', phone: '', address: '' },
    pizza: {
      size: sizes[0].value,
      pasta: pastas[0].value,
      crust: crusts[0].value,
      flavour: flavours[0].value,
    },
    payment: paymentMethods[0].value,
    delivery: deliveryOptions[0].value,
  };

  function customerFieldsNotFilled(fields) {
    const { name, phone, address } = fields;

    if (name === '' || phone === '' || address === '') return true;
    return false;
  }

  return (
    <Formik
      initialValues={formValues}
      validate={values => {
        const errors = {};

        if (
          idx(values, _ => _.customer.phone) != null &&
          !phoneRegexTest(values.customer.phone)
        ) {
          errors.customer = {
            ...errors.customer,
            phone: 'Este campo é obrigatório!',
          };
        }

        if (!values.customer.name) {
          errors.customer = {
            ...errors.customer,
            name: 'Este campo é obrigatório!',
          };
        } else if (!nameRegexTest(values.customer.name)) {
          errors.customer = {
            ...errors.customer,
            name: 'Números e caracteres especiais não são permitidos',
          };
        }

        if (!values.customer.address) {
          errors.customer = {
            ...errors.customer,
            address: 'Este campo é obrigatório!',
          };
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(finishOrderRequest(values));
        setTimeout(() => {
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
          {OrderFormStepController(formStep, {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            pizzaValues,
            orderValues,
          })}

          <OrderFormButtonArea>
            <ActionButton
              title="〈 Anterior"
              type="button"
              disabled={isSubmitting || formStep === 1}
              onClick={() => setFormStep(formStep - 1)}
            />

            {formStep < 5 && (
              <ActionButton
                title="Próximo 〉"
                type="button"
                disabled={
                  !isObjEmpty(errors.customer) ||
                  customerFieldsNotFilled(values.customer) ||
                  isSubmitting
                }
                onClick={() => setFormStep(formStep + 1)}
              />
            )}

            {formStep === 5 && (
              <ActionButton
                title="Finalizar"
                type="submit"
                disabled={isSubmitting}
              />
            )}
          </OrderFormButtonArea>
        </form>
      )}
    </Formik>
  );
}

export default OrderForm;

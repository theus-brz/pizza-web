import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik } from 'formik';
import idx from 'idx';

import ActionButton from '~/components/ActionButton/ActionButton';
import Card from '~/components/Card/Card';
import Loading from '~/components/Loading/Loading';
import ERROR_MESSAGES from '~/constants/ERROR_MESSAGES';
import ORDER_PAGE from '~/constants/RESOURCES/ORDER_PAGE';
import { finishOrderRequest } from '~/store/modules/order/actions';
import { isObjEmpty, nameRegexTest, phoneRegexTest } from '~/utils';

import OrderFormStepController from './OrderFormStepController';
import { OrderFormButtonArea } from './OrderFormStyles';

const { REQUIRED_FIELD, NO_NUMBER_OR_SYMBOLS_ALLOWED } = ERROR_MESSAGES;
const { PREVIOUS_BUTTON, NEXT_BUTTON, FINISH_BUTTON } = ORDER_PAGE;

function OrderForm() {
  const [formStep, setFormStep] = useState(1);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const pizzaValues = useSelector(state => state.pizza.data);
  const pizzaLoading = useSelector(state => state.pizza.loading);
  const orderValues = useSelector(state => state.order.data);
  const orderLoading = useSelector(state => state.order.loading);

  const dispatch = useDispatch();

  if (pizzaLoading || orderLoading) {
    return (
      <Card>
        <Loading />
      </Card>
    );
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
            phone: REQUIRED_FIELD,
          };
        }

        if (!values.customer.name) {
          errors.customer = {
            ...errors.customer,
            name: REQUIRED_FIELD,
          };
        } else if (!nameRegexTest(values.customer.name)) {
          errors.customer = {
            ...errors.customer,
            name: NO_NUMBER_OR_SYMBOLS_ALLOWED,
          };
        }

        if (!values.customer.address) {
          errors.customer = {
            ...errors.customer,
            address: REQUIRED_FIELD,
          };
        }

        return errors;
      }}
      onSubmit={values => {
        dispatch(finishOrderRequest(values));
        setButtonDisabled(true);
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
              title={PREVIOUS_BUTTON}
              type="button"
              disabled={isButtonDisabled || isSubmitting || formStep === 1}
              onClick={() => setFormStep(formStep - 1)}
            />

            {formStep < 5 && (
              <ActionButton
                title={NEXT_BUTTON}
                type="button"
                disabled={
                  isButtonDisabled ||
                  !isObjEmpty(errors.customer) ||
                  customerFieldsNotFilled(values.customer) ||
                  isSubmitting
                }
                onClick={() => setFormStep(formStep + 1)}
              />
            )}

            {formStep === 5 && (
              <ActionButton
                title={FINISH_BUTTON}
                type="submit"
                disabled={isButtonDisabled || isSubmitting}
              />
            )}
          </OrderFormButtonArea>
        </form>
      )}
    </Formik>
  );
}

export default OrderForm;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ActionButton from '~/components/ActionButton/ActionButton';
import { orderDataRequest } from '~/store/modules/order/actions';
import { pizzaDataRequest } from '~/store/modules/pizza/actions';

import OrderForm from './OrderForm/OrderForm';
import { OrderWrapper } from './OrderStyles';

function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDataRequest());
    dispatch(pizzaDataRequest());
  }, [dispatch]);

  const history = useHistory();

  function handleNavigation() {
    return history.goBack();
  }

  return (
    <OrderWrapper>
      <ActionButton
        title="↩ Página Principal"
        type="button"
        onClick={() => handleNavigation()}
      />

      {OrderForm()}
    </OrderWrapper>
  );
}

export default Order;

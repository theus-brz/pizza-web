import React from 'react';

import SelectorInput from '~/components/SelectorInput/SelectorInput';
import FLAVOUR_AMOUNT from '~/constants/PIZZA/FLAVOUR_AMOUNT';
import SIZE from '~/constants/PIZZA/SIZE';

function PizzaSizeFormStep(values, errors, touched, handleChange, handleBlur) {
  return (
    <div>
      <p>Tamanho da Pizza</p>

      <p>Tamanho</p>
      <SelectorInput
        name="pizza.size"
        value={values.pizza.size}
        onChange={handleChange}
        onBlur={handleBlur}
        options={SIZE}
      />
      {errors.email && touched.email && errors.email}

      <p>Qtde. Sabores</p>
      <SelectorInput
        name="pizza.flavourAmount"
        value={values.pizza.flavourAmount}
        onChange={handleChange}
        onBlur={handleBlur}
        options={FLAVOUR_AMOUNT}
      />
      {errors.password && touched.password && errors.password}
    </div>
  );
}

export default PizzaSizeFormStep;

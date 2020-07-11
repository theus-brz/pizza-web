import React from 'react';

import SelectorInput from '~/components/SelectorInput/SelectorInput';
import CRUST from '~/constants/PIZZA/CRUST';
import PASTA from '~/constants/PIZZA/PASTA';

function PizzaPastaFormStep(values, errors, touched, handleChange, handleBlur) {
  return (
    <div>
      <p>Massa da Pizza</p>

      <p>Massa</p>
      <SelectorInput
        name="pizza.pasta"
        value={values.pizza.pasta}
        onChange={handleChange}
        onBlur={handleBlur}
        options={PASTA}
      />
      {errors.email && touched.email && errors.email}

      <p>Borda</p>
      <SelectorInput
        name="pizza.crust"
        value={values.pizza.crust}
        onChange={handleChange}
        onBlur={handleBlur}
        options={CRUST}
      />
      {errors.password && touched.password && errors.password}
    </div>
  );
}

export default PizzaPastaFormStep;

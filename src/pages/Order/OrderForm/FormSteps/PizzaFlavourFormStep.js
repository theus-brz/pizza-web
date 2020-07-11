import React from 'react';

function PizzaFlavourFormStep(
  values,
  errors,
  touched,
  handleChange,
  handleBlur
) {
  return (
    <div>
      <p>Sabor da Pizza</p>

      <p>Sabor</p>
      <input
        type="text"
        name="pizza.flavour"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.pizza.flavour}
      />
      {errors.email && touched.email && errors.email}
    </div>
  );
}

export default PizzaFlavourFormStep;

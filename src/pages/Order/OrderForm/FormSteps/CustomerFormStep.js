import React from 'react';

import MaskedInput from '~/components/MaskedInput/MaskedInput';

function CustomerFormStep(values, errors, touched, handleChange, handleBlur) {
  return (
    <div>
      <p>Informações do cliente</p>

      <p>Nome</p>
      <input
        type="name"
        name="customer.name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.name}
      />
      {errors.email && touched.email && errors.email}

      <p>Telefone</p>
      <MaskedInput
        type="text"
        name="customer.phone"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.phone}
      />
      {errors.password && touched.password && errors.password}

      <p>Endereço</p>
      <input
        type="text"
        name="customer.address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.customer.address}
      />
      {errors.password && touched.password && errors.password}
    </div>
  );
}

export default CustomerFormStep;

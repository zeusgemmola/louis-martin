import React from "react";

const AmountConverter = ({ id, ...inputProps }) => {
  return (
    <div>
      <label htmlFor="amount">Montant</label>
      <input id={id} type="text" {...inputProps} />
      <span data-error="Erreur" data-success="valid"></span>
    </div>
  );
};

export default AmountConverter;

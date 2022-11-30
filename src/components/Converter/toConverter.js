import React from "react";

const toConverter = ({ ...inputProps }) => (
  <div>
    <label>To</label>
    <select
      defaultValue="EUR"
      className="browser-default"
      name="outputDevises"
      id="outputDevises"
      {...inputProps}
    >
      <option value="EUR">EUR</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="USD">USD</option>
    </select>
  </div>
);

export default toConverter;

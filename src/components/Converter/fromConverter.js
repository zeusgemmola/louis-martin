import React from "react";

const FromConverter = ({ ...inputProps }) => (
  <div>
    <label>From</label>
    <select
      defaultValue="EUR"
      className="browser-default"
      name="inputDevises"
      id="inputDevises"
      {...inputProps}
    >
      <option value="EUR">EUR</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="USD">USD</option>
    </select>
  </div>
);

export default FromConverter;

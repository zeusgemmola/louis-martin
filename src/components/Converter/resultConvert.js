import { React, useState, useEffect } from "react";

const ResultConvert = ({ result, amount }) => {
  const [stateResult, setStateResult] = useState("");
  useEffect(() => {
    if (result > 0) {
      setStateResult(result * amount);
    } else {
      setStateResult(0);
    }
  }, [amount, result]);

  return <div>{stateResult}</div>;
};

export default ResultConvert;

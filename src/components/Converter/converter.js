import React, { useState, useEffect } from "react";
import FromConverter from "./fromConverter";
import ToConverter from "./toConverter";
import Result from "./resultConvert";
import AmountConverter from "./amountConverter";
import Spinner from "../Spinner/index";

const Converter = () => {
  const [inputCurrency, setInputCurrency] = useState(0);
  const [stateClassName, setStateClassName] = useState("");
  const [stateCurrencyTo, setStateCurrencyTo] = useState("EUR");
  const [stateCurrencyFrom, setStateCurrencyFrom] = useState("EUR");
  const [stateCurrency, setStateCurrency] = useState({
    isLoading: false,
    currency: 0
  });
  const { isLoading, currency } = stateCurrency;

  const handleChangeAmount = (amount) => {
    if (amount?.target?.value > 0) {
      setInputCurrency(amount?.target?.value);
      setStateClassName("valid");
    } else {
      setInputCurrency(amount?.target?.value);
      setStateClassName("invalid");
    }
  };

  const handleChangeCurrency = (currency) => {
    if (currency.target.id === "inputDevises") {
      setStateCurrencyFrom(currency?.target?.value);
    } else {
      setStateCurrencyTo(currency?.target?.value);
    }
  };

  useEffect(() => {
    const fetchPeople = async () => {
      if (
        stateCurrencyFrom !== stateCurrencyTo &&
        inputCurrency > 0 &&
        stateClassName !== "invalid"
      ) {
        setInputCurrency(parseInt(inputCurrency, 10));
        setStateCurrency({ isLoading: true });
        try {
          const dataAll = await fetch(
            `https://api.currencyapi.com/v3/latest?apikey=RVBeiGgDCoFuaHqlehg96KPhpj3Z4MdU5D5yaxV0&base_currency=${stateCurrencyFrom}&currencies=${stateCurrencyTo}`
          );
          const { data } = await dataAll.json();
          setStateCurrency({
            currency: data[stateCurrencyTo].value,
            isLoading: false
          });
        } catch {}
      } else {
        setStateCurrency({ currency: 0 });
      }
    };
    fetchPeople();
  }, [inputCurrency, stateClassName, stateCurrencyFrom, stateCurrencyTo]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s8">
          <h3>Convertisseur</h3>
          <div className="row">
            <div className="col s6">
              <FromConverter onChange={handleChangeCurrency} />
            </div>
            <div className="col s6">
              <ToConverter onChange={handleChangeCurrency} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <AmountConverter
                id="amount"
                value={inputCurrency}
                onChange={handleChangeAmount}
                className={stateClassName}
              />
            </div>
            <div className="input-field col s12">
              <h5>
                Result :
                {isLoading ? (
                  <Spinner />
                ) : (
                  <Result
                    result={stateCurrency.currency}
                    amount={inputCurrency}
                  />
                )}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;

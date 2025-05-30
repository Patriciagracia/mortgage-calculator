import { useState } from "react";
import iconCalculator from "../../assets/images/icon-calculator.svg";
import "./MortgageCalculator.css";

export default function MortgageCalculator({
  setMonthly,
  setTotalMortgage,
  showErrors,
  setShowErrors,
}) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [annualRate, setAnnualRate] = useState(null);
  const [years, setYears] = useState("");
  const [selected, setSelected] = useState(null);

  function handleCalculate() {
    const hasErrors =
      !mortgageAmount ||
      mortgageAmount <= 0 ||
      !years ||
      years <= 0 ||
      !annualRate ||
      annualRate === null ||
      selected === null ||
      isNaN(mortgageAmount) ||
      isNaN(years) ||
      isNaN(annualRate);

    if (hasErrors) {
      setShowErrors(true);
      setMonthly(null);
      setTotalMortgage(null);
      return;
    }

    if (showErrors) {
      setShowErrors(false);
    }

    const months = years * 12;
    const monthlyRate = annualRate / 12;

    let monthlyPayment;
    let total;

    if (selected === "repayment") {
      const accumulationFactor = Math.pow(1 + monthlyRate, months);
      monthlyPayment =
        (mortgageAmount * monthlyRate * accumulationFactor) /
        (accumulationFactor - 1);
      total = monthlyPayment * months;
    } else {
      monthlyPayment = mortgageAmount * monthlyRate;
      total = monthlyPayment * months;
    }

    setMonthly(monthlyPayment);
    setTotalMortgage(total);
  }

  function handleClear() {
    setAnnualRate(null);
    setMortgageAmount("");
    setYears("");
    setSelected("");
    setMonthly(null);
    setTotalMortgage(null);
  }

  return (
    <div className="calculator container mt-4 mortgage-form">
      <div className="row mb-3 align-items-center">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h5 className="mortgage-title text-nowrap mb-0">
              Mortgage Calculator
            </h5>
            <p
              role="button"
              onClick={handleClear}
              className="clear mb-0 text-nowrap"
            >
              Clear All
            </p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="form-label">
          Mortgage Amount
        </label>
        <div
          className={`input-group ${
            showErrors && mortgageAmount === "" ? "input-error-group" : ""
          }`}
        >
          <span className="input-group-text input-addon">£</span>
          <input
            type="number"
            className={`form-control no-spinner ${
              showErrors && mortgageAmount === "" ? "input-error" : ""
            }`}
            id="amount"
            aria-label="Amount"
            step="0.01"
            min="0"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
          />
        </div>
      </div>
      {showErrors && mortgageAmount === "" && (
        <div className="error-message">This field is required</div>
      )}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="term" className="form-label">
            Mortgage Term
          </label>
          <div
            className={`input-group ${
              showErrors && years === "" ? "input-error-group" : ""
            }`}
          >
            <input
              type="number"
              className="form-control no-spinner"
              id="term"
              aria-label="Term"
              step="0.1"
              min="0"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
            <span className="input-group-text input-addon">years</span>
          </div>
          {showErrors && years === "" && (
            <div className="error-message">This field is required</div>
          )}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="rate" className="form-label">
            Interest Rate
          </label>
          <div
            className={`input-group ${
              showErrors && annualRate === null ? "input-error-group" : ""
            }`}
          >
            <input
              type="number"
              className="form-control no-spinner"
              id="rate"
              aria-label="Interest"
              step="0.01"
              min="0"
              value={
                annualRate === null
                  ? ""
                  : Math.round(annualRate * 100 * 100) / 100
              }
              onChange={(e) => {
                const val = e.target.value;
                setAnnualRate(val === "" ? null : Number(val) / 100);
              }}
            />
            <span className="input-group-text input-addon">%</span>
          </div>
          {showErrors && annualRate === null && (
            <div className="error-message">This field is required</div>
          )}
        </div>
      </div>

      <div className="row">
        <p className="mortgage-type">Mortgage type</p>
        <div className="radio-group">
          <label
            className={`radio-option mb-2 ${
              selected === "repayment" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="mortgageType"
              value="repayment"
              className="radio-input"
              checked={selected === "repayment"}
              onChange={() => setSelected("repayment")}
            />
            <span className="radio-indicator"></span>
            <span className="selector-text">Repayment</span>
          </label>

          <label
            className={`radio-option ${
              selected === "interestOnly" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="mortgageType"
              value="interestOnly"
              className="radio-input"
              checked={selected === "interestOnly"}
              onChange={() => setSelected("interestOnly")}
            />
            <span className="radio-indicator"></span>
            <span className="selector-text">Interest Only</span>
          </label>
        </div>
      </div>
      {showErrors && selected === null && (
        <div className="error-message">This field is required</div>
      )}
      <div className="d-flex justify-content-center justify-content-md-start mt-2">
        <button
          type="button"
          onClick={handleCalculate}
          className="calculate-btn mt-3 mb-3"
        >
          <div className="ms-3 me-3">
            <img
              src={iconCalculator}
              alt=""
              className="btn-icon me-2"
              aria-hidden="true"
            />
            Calculate Repayments
          </div>
        </button>
      </div>
    </div>
  );
}

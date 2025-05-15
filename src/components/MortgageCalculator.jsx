import React from "react";
import { useState } from "react";
import Results from "./Results";
import iconCalculator from "../../assets/images/icon-calculator.svg";
import "./MortgageCalculator.css";

export default function MortgageCalculator({ setMonthly, setTotalMortgage }) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");
  const [selected, setSelected] = useState("repayment");
  const months = years * 12;
  const monthlyRate = annualRate / 12;

  function handleCalculate() {
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
    setAnnualRate("");
    setMortgageAmount("");
    setYears("");
    setSelected("repayment");
    setMonthly(null);
    setTotalMortgage(null);
  }

  return (
    <div className="calculator container mt-4 mortgage-form">
      <div className="row mb-3">
        <div className="col-9 col-md-12">
          <h2 className="mortgage-title">Mortgage Calculator</h2>
        </div>
        <div className="col-3 col-md-12">
          <p role="button" onClick={handleClear} className="clear">
            Clear All
          </p>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Mortgage Amount
        </label>
        <div className="input-group">
          <span className="input-group-text input-addon">£</span>
          <input
            type="number"
            className="form-control"
            id="amount"
            aria-label="Amount"
            value={mortgageAmount}
            onChange={(e) => {
              const val = e.target.value;
              setMortgageAmount(val === "" ? "" : Number(val));
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="term" className="form-label">
            Mortgage Term
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="term"
              aria-label="Term"
              value={years}
              onChange={(e) => {
                const val = e.target.value;
                setYears(val === "" ? "" : Number(val));
              }}
            />
            <span className="input-group-text input-addon">years</span>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="rate" className="form-label">
            Interest Rate
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="rate"
              aria-label="Interest"
              value={annualRate === "" ? "" : annualRate * 100}
              onChange={(e) => {
                const val = e.target.value;
                setAnnualRate(val === "" ? "" : Number(val) / 100);
              }}
            />
            <span className="input-group-text input-addon">%</span>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="mortgage-type">Mortgage type</p>
        <div className="col-12">
          <div className="form-check ">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault1"
              checked={selected === "repayment"}
              onChange={() => setSelected("repayment")}
            />
            <label className="form-check-label" htmlFor="radioDefault1">
              Repayment
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault2"
              checked={selected === "interest"}
              onChange={() => setSelected("interest")}
            />
            <label className="form-check-label" htmlFor="radioDefault2">
              Interest Only
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleCalculate} className="calculate-btn">
        <img
          src={iconCalculator}
          alt=""
          className="btn-icon"
          aria-hidden="true"
        />
        Calculate Repayments
      </button>
    </div>
  );
}

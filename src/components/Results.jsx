import React from "react";
export default function Results({ monthly, total }) {
  if (monthly == null || total == null) {
    return (
      <>
        <h3>Results shown here</h3>
        <p>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="calculator container mt-4">
          <h2>Your results</h2>
        </div>
        <div>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
        </div>
        <div className="result-box">
          <p>Your monthly repayments</p>
          <h1>{monthly.toFixed(2)}</h1>
          <hr />
          <p>Total you'll repay over the term</p>
          <h3>{total.toFixed(2)}</h3>
        </div>
      </>
    );
  }
}

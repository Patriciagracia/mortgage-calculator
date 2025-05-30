import "./Results.css";
import illustrationEmpty from "../../assets/images/illustration-empty.svg";
export default function Results({ monthly, total, showErrors }) {
  if (monthly === null || total === null || showErrors) {
    return (
      <div className="results-container-empty">
        <img
          src={illustrationEmpty}
          alt=""
          className="illustration mt-3 mb-2"
          aria-hidden="true"
        />
        <h5 id="results-shown">Results shown here</h5>
        <p>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    );
  } else {
    return (
      <div className="results-container mb-4 mb-md-0">
        <div className="ms-3 mb-3">
          <h5 className="text-start results-h5">Your results</h5>
        </div>
        <div className="ms-3 mb-4">
          <p className="text-start">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
        </div>
        <div className="results-box text-start mb-5 ms-3">
          <p>Your monthly repayments</p>
          <h1 id="monthly">£{monthly.toFixed(2)}</h1>
          <hr />
          <p>Total you'll repay over the term</p>
          <h4 id="total-amount">£{total.toFixed(2)}</h4>
        </div>
      </div>
    );
  }
}

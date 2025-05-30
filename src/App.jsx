import { useState } from "react";
import "./App.css";
import MortgageCalculator from "./components/MortgageCalculator";
import Results from "./components/Results";

function App() {
  const [monthly, setMonthly] = useState(null);
  const [totalMortgage, setTotalMortgage] = useState(null);
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div className="row calculator-wrapper">
      <div className="col-12 col-md">
        <MortgageCalculator
          setMonthly={setMonthly}
          setTotalMortgage={setTotalMortgage}
          setShowErrors={setShowErrors}
          showErrors={showErrors}
        />
      </div>
      <div className="col-12 col-md d-flex results-wrapper mt-2 mt-md-0">
        <div>
          <Results
            monthly={monthly}
            total={totalMortgage}
            showErrors={showErrors}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

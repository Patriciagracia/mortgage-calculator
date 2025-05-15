import { useState } from "react";
import "./App.css";
import MortgageCalculator from "./components/MortgageCalculator";
import Results from "./components/Results";

function App() {
  const [monthly, setMonthly] = useState(null);
  const [totalMortgage, setTotalMortgage] = useState(null);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md">
          {" "}
          <MortgageCalculator
            setMonthly={setMonthly}
            setTotalMortgage={setTotalMortgage}
          />
        </div>
        <div className="col-12 col-md">
          <Results monthly={monthly} total={totalMortgage} />
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";


function App() {
  // =========================
  // STATE
  // =========================

  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("AFN");

  const [toCurrency, setToCurrency] = useState("USD");

  const [result, setResult] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =========================
  // CURRENCIES
  // =========================

  const currencies = [
    "AFN",
    "USD",
    "EUR",
    "GBP",
    "INR",
    "PKR",
    "JPY",
    "CAD",
    "AUD",
    "CHF",
  ];

  // =========================
  // SWAP FUNCTION
  // =========================

  function swapCurrencies() {
    setFromCurrency(toCurrency);

    setToCurrency(fromCurrency);

    setResult(0);

    setError("");
  }

  // =========================
  // CONVERT FUNCTION
  // =========================

  async function convertCurrency() {
    // Check the amount
    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount.");

      return;
    }

    // If both currencies are the same
    if (fromCurrency === toCurrency) {
      setResult(Number(amount));

      setError("");

      return;
    }

    try {
      setLoading(true);

      setError("");

      const url = `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch exchange rate.");
      }

      const data = await response.json();

      const convertedAmount = Number(amount) * data.rate;

      setResult(convertedAmount.toFixed(2));
    } catch (error) {
      console.error(error);

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="container">
      <div className="card">
        {/* =====================
            FROM SECTION
        ====================== */}

        <div className="box">
          <label>From</label>

          <div className="row">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* =====================
            SWAP BUTTON
        ====================== */}

        <button className="swap" onClick={swapCurrencies}>
          ⇅
        </button>

        {/* =====================
            TO SECTION
        ====================== */}

        <div className="box">
          <label>To</label>

          <div className="row">
            <input type="text" value={result} readOnly />

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* =====================
            ERROR
        ====================== */}

        {error && <p className="error">{error}</p>}

        {/* =====================
            CONVERT BUTTON
        ====================== */}

        <button
          className="convert"
          onClick={convertCurrency}
          disabled={loading}>
          {loading
            ? "Converting..."
            : `Convert ${fromCurrency} to ${toCurrency}`}
        </button>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(euroValue);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter amount in Indian Rupees:</label><br />
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        /><br /><br />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          Converted Euro Amount: <strong>€{euro}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;

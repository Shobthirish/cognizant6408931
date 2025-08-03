import React from "react";
import EventExample from "./components/EventExample";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Handling Examples</h1>
      <EventExample />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

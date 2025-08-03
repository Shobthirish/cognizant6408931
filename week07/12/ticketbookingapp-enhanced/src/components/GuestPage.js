import React from "react";

function GuestPage({ onLogin }) {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px" }}>
      <h2>👤 Welcome Guest</h2>
      <p>To book your flight, please log in.</p>
      <button onClick={onLogin} style={{
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Login</button>
      <h3 style={{ marginTop: "30px" }}>🛫 Available Flights</h3>
      <ul>
        <li>Delhi → Mumbai – 10:00 AM</li>
        <li>Bangalore → Chennai – 12:30 PM</li>
        <li>Hyderabad → Kolkata – 3:00 PM</li>
      </ul>
    </div>
  );
}

export default GuestPage;

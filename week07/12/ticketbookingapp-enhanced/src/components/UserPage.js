import React from "react";

const flights = [
  { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM" },
  { id: 2, from: "Bangalore", to: "Chennai", time: "12:30 PM" },
  { id: 3, from: "Hyderabad", to: "Kolkata", time: "3:00 PM" }
];

function UserPage({ onLogout }) {
  return (
    <div style={styles.container}>
      <h2>👋 Welcome, User</h2>
      <p>✅ You can now book your flight tickets below:</p>
      <button onClick={onLogout} style={styles.logoutButton}>Logout</button>

      <h3 style={styles.subHeader}>✈️ Book a Flight</h3>
      <div style={styles.cardContainer}>
        {flights.map((flight) => (
          <div key={flight.id} style={styles.card}>
            <h4>🛫 {flight.from} → {flight.to}</h4>
            <p>Departure Time: {flight.time}</p>
            <button style={styles.bookBtn}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "10px"
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right"
  },
  subHeader: {
    marginTop: "40px"
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  bookBtn: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default UserPage;

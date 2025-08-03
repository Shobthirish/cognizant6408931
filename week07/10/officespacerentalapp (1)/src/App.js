import React from "react";

const offices = [
  {
    id: 1,
    name: "Urban Work Hub",
    rent: 55000,
    address: "Koramangala, Bangalore",
    image: "/office.jpg"
  },
  {
    id: 2,
    name: "Skyline Spaces",
    rent: 72000,
    address: "Gachibowli, Hyderabad",
    image: "/office.jpg"
  },
  {
    id: 3,
    name: "Innovate HQ",
    rent: 60000,
    address: "T-Nagar, Chennai",
    image: "/office.jpg"
  }
];

function App() {
  const heading = <h1 style={{ textAlign: "center", color: "#333" }}>Office Space Rental</h1>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}
      {offices.map((office) => (
        <div key={office.id} style={{ border: "1px solid #ccc", marginBottom: "15px", padding: "10px", borderRadius: "8px" }}>
          <img src={office.image} alt={office.name} style={{ width: "150px", height: "150px" }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

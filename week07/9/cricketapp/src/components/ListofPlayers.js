import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 95 },
    { name: "Shubman Gill", score: 65 },
    { name: "KL Rahul", score: 45 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Jasprit Bumrah", score: 90 },
    { name: "R Ashwin", score: 60 },
    { name: "Bhuvneshwar Kumar", score: 75 },
    { name: "Suryakumar Yadav", score: 50 },
    { name: "Mohammed Shami", score: 40 },
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>List of Players (Score ≥ 70)</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;

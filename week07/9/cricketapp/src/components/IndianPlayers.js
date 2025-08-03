import React from "react";

function IndianPlayers() {
  const oddPlayers = ["Virat", "Shubman", "Hardik", "Ashwin", "Shami"];
  const evenPlayers = ["Rohit", "KL", "Jadeja", "Bumrah", "SKY"];

  const [first, second, ...restOdd] = oddPlayers;
  const [ev1, ev2, ...restEven] = evenPlayers;

  const T20players = ["Pant", "Ishan", "Samson"];
  const RanjiTrophyPlayers = ["Rahane", "Pujara", "Shaw"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>First: {first}</p>
      <p>Second: {second}</p>
      <p>Others: {restOdd.join(", ")}</p>

      <h2>Even Team Players</h2>
      <p>First: {ev1}</p>
      <p>Second: {ev2}</p>
      <p>Others: {restEven.join(", ")}</p>

      <h2>All Merged Players</h2>
      <p>{allPlayers.join(", ")}</p>
    </div>
  );
}

export default IndianPlayers;

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <button className={`action-btn ${theme}`}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
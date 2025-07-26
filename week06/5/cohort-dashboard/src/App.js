
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Basics',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-01'
    },
    {
      name: 'Advanced Spring Boot',
      status: 'completed',
      startDate: '2025-06-01',
      endDate: '2025-07-01'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Academy Cohorts</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

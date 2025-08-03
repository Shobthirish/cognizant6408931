
import React from 'react';

const CohortDetails = ({ cohort }) => {
  return (
    <div>
      <h3>{cohort.code}</h3>
      <p>{cohort.name}</p>
      <p>Status: {cohort.status}</p>
    </div>
  );
};

export default CohortDetails;

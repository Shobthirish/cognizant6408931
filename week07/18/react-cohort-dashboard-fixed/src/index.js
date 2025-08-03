import React from 'react';
import ReactDOM from 'react-dom/client';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CohortDetails cohort={CohortData[0]} />);
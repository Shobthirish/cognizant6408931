import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = 'REF-' + Math.floor(Math.random() * 1000000);
    alert(`Thank you, ${employeeName}. Your complaint has been registered with Reference Number: ${refNumber}`);
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <label htmlFor="employeeName">Employee Name:</label>
      <input
        type="text"
        id="employeeName"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        required
        placeholder="Enter your name"
      />

      <label htmlFor="complaint">Complaint:</label>
      <textarea
        id="complaint"
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        required
        placeholder="Describe your issue"
      ></textarea>

      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintRegister;
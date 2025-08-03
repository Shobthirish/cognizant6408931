import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (formData.name.length < 5) {
      errs.name = 'Name must be at least 5 characters.';
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'Invalid email format.';
    }
    if (formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Registration successful!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
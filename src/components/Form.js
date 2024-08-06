import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted Form Data:", formData);
    // You can also perform other actions here, such as sending the form data to a server
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default Form;

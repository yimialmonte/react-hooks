import React from 'react';
import { useForm } from '../../hooks/useForm';
import './simpleForm.css';

export const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForm({ name: '', email: '', password: '' });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Use Effects</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          placeholder=""
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          value={email}
          className="form-control"
          placeholder="Enter email"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          placeholder="****"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

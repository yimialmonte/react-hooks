import React, { useEffect, useState } from 'react';
import './simpleForm.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setformState] = useState({ name: '', email: '' });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hey');
  }, []);

  useEffect(() => {
    // console.log('Form state change');
  }, [formState]);

  useEffect(() => {
    // console.log('Email Cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({...formState, [target.name]: target.value})
  };

  return (
    <>
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
        {(name === "123") && <Message />}
      </div>
    </>
  );
};

import React, { useContext } from 'react';
import { UserContect } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContect);
  const newUser = { id: 123, name: 'Juan' };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(newUser)}>
        Login
      </button>
    </div>
  );
};

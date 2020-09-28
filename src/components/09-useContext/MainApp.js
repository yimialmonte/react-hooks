import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContect } from './UserContext';

export const MainApp = () => {
  const user = {
    id: 1234,
    name: 'Juan',
    email: 'juan@gmail.com',
  };

  return (
    <UserContect.Provider value={user}>
      <AppRouter />
    </UserContect.Provider>
  );
};

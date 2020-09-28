import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContect } from './UserContext';

export const MainApp = () => {
  const [user, setUser] = useState({})

  return (
    <UserContect.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContect.Provider>
  );
};

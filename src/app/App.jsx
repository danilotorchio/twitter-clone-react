import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { AuthContext } from './utils/AuthContext';

const App = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem('auth') ?? false;
    setAuthState(authState === 'true');
  });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export { App };

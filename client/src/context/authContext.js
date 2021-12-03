import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const history = useNavigate();

  const getCookie = (name) => {
    return Cookies.get(name);
  };

  const userInfo = JSON.parse(getCookie('user') || null);

  const [authState, setAuthState] = useState(userInfo || { isLoggedIn: false, id: null });

  const setAuthInfo = (cname, cvalue, exdays) => {
    console.log('setting auth info', cvalue);
    Cookies.set(cname, JSON.stringify(cvalue), { expires: exdays, path: '/' });
    setAuthState(cvalue);
  };

  const isAuthenticated = () => {
    console.log('is authenticated', authState.isLoggedIn);
    return authState.isLoggedIn;
  };

  const isBusiness = () => {
    return authState.type === 'business';
  };

  const logout = () => {
    Cookies.remove('user');
    setAuthState({ isLoggedIn: false });
    history('/login');
  };

  return (
    <Provider
      value={{
        authState,
        setAuthInfo,
        isAuthenticated,
        logout,
        isBusiness,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };

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

  const userInfo = JSON.parse(getCookie('user'));

  const [authState, setAuthState] = useState(userInfo || { isLoggedIn: false });

  const setAuthInfo = (cname, cvalue, exdays) => {
    Cookies.set(cname, JSON.stringify(cvalue), { expires: exdays, path: '/' });
    setAuthState(cvalue);
  };

  const isAuthenticated = () => {
    if (!authState.isLoggedIn) return false;
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

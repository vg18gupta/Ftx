import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import CustomerDashboard from './components/customer';
import BusinessDashboard from './components/business';
import { AuthProvider, AuthContext } from './context/authContext';

const AuthenticatedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext.isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return children;
};
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/customer/login" element={<Login />} />
          <Route path="/business/login" element={<Login />} />
          <Route
            path="/customer/dashboard"
            element={
              <AuthenticatedRoute>
                <CustomerDashboard />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/business/dashboard"
            element={
              <AuthenticatedRoute>
                <BusinessDashboard />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

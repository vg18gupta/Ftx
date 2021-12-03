import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import CustomerDashboard from './components/customer/index';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customer/login" element={<Login />} />
          <Route path="/business/login" element={<Login />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

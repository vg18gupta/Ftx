import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/business/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

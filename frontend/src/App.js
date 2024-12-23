import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Only import Routes and Route
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import RideBooking from './components/RideBooking';
import './styles.css'; 
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book-ride" element={<RideBooking />} />
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      {/* <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
      <Route path="/driver" element={<ProtectedRoute element={<Driver />} />} /> */}
    </Routes>
  </div>



    // <div>
    //   <Navbar />
    //   <Routes>  {/* Use Routes here, no need for Router */}
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route 
    //       path="/profile" 
    //       element={<ProtectedRoute element={<Profile />} />} // Protect the Profile route
    //     />
    //   </Routes>
      
    // </div>
  );
};

export default App;

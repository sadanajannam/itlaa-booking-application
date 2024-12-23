import React from 'react';
import { Link } from 'react-router-dom';
import logo from './download.jpg';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        {!isAuthenticated && <Link className="navbar-link" to="/register">Register</Link>}
        {!isAuthenticated && <Link className="navbar-link" to="/login">Login</Link>}
        {isAuthenticated && <Link className="navbar-link" to="/profile">Profile</Link>}
        <Link className="navbar-link" to="/admin">Admin</Link>
        <Link className="navbar-link" to="/driver">Driver</Link>
      </div>
    </div>
  );
};

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './download.jpg';
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" className="logo-image" />
//       </div>
//       <div className="navbar-links">
//         <Link className="navbar-link" to="/">Home</Link>
//         <Link className="navbar-link" to="/register">Register</Link>
//         <Link className="navbar-link" to="/login">Login</Link>
//         <Link className="navbar-link" to="/admin">Admin</Link>
//         <Link className="navbar-link" to="/driver">Driver</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

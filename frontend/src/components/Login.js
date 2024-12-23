import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//       const token = response.data.token;
//       localStorage.setItem('token', token); // Save token in local storage
//       navigate('/home'); // Redirect to the home page after login
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid credentials');
//     }
//   };
  

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;








// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useHistory } from 'react-router-dom';

// // const Login = () => {
// //   const [user, setUser] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   const [error, setError] = useState('');
// //   const history = useHistory();

// //   const handleChange = (e) => {
// //     setUser({ ...user, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/users/login', user);
// //       localStorage.setItem('token', response.data.token); // Save token
// //       history.push('/profile');
// //     } catch (err) {
// //       setError('Invalid credentials');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           name="email"
// //           value={user.email}
// //           onChange={handleChange}
// //           placeholder="Email"
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           value={user.password}
// //           onChange={handleChange}
// //           placeholder="Password"
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // };

// // export default Login;



// // Login.js
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // After successful login
//     navigate('/dashboard');  // Use navigate instead of history.push()
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import './Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert('Sign-up successful! Please log in.');
    } catch (error) {
      alert(error.response?.data?.message || 'Sign-up failed');
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;




// import React, { useState } from 'react';
// // import axios from 'axios';
// import './Auth.css'; // Assuming your CSS file is named Auth.css

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send form data to the backend
//       // const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
//       alert('Sign-up successful! Please log in.');
//       // Redirect or do something else after success
//     } catch (error) {
//       // Display the error message from the backend
//       alert(error.response?.data?.message || 'Sign-up failed');
//     }
//   };

//   return (
//     <div className="sign-up-form">
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;




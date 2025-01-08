import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import axios from 'axios'; // For API calls
import { useNavigate } from 'react-router-dom'; // For navigation

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);

      const { token } = response.data;
      localStorage.setItem('authToken', token);

      const userRole = 'user'; // Simulated backend response; replace with decoded JWT logic
      if (userRole === 'user') navigate('/');
      else if (userRole === 'admin') navigate('/admin-dashboard');
      else navigate('/');
      alert('Login successful!');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{ fontFamily: 'Roboto, sans-serif'}}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="shadow-lg p-4 rounded bg-light" style={{borderTop:"8px solid blue", borderRadiusTop:"50px"}}>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Login
              </h2>
              {error && <p className="text-danger text-center">{error}</p>}
              <div className="mb-3 position-relative">
                <FaEnvelope className="position-absolute top-50 start-0 translate-middle-y ms-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control ps-5"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <FaLock className="position-absolute top-50 start-0 translate-middle-y ms-3" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="form-control ps-5"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                Login
              </button>
              <div className="d-flex justify-content-between">
                <p>
                  If you don't have an account?{' '}
                  <a href="#sign-up" className="text-decoration-none">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

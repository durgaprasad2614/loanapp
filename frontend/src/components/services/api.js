import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signUp = (formData) => API.post('/auth/signup', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const submitLoanForm = (formData) => API.post('/user/loan-application', formData);
export const getAdminDashboard = () => API.get('/admin/dashboard');

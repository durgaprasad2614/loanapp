const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authenticateToken = require('../middleware/authenticateToken');

// Assuming your Mongoose models are imported here
// const User = require('./models/User'); // Update with correct path
const User = require('../models/User');
const LoanApplication = require('../models/LoanApplication'); // Update with correct path

const router = express.Router();
router.use(bodyParser.json()); // Use body parser middleware for parsing JSON requests

// Signup Route (with password hashing)
router.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body;

  // Simple validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Create a new user without hashing password manually (handled in the model)
    const newUser = new User({ name, email, password, phone });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});


// Apply for a Loan Route
router.post('/apply', authenticateToken, async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    age,
    address,
    monthlyIncome,
    loanAmount,
    loanTenure,
  } = req.body;

  // Simple validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !age ||
    !address ||
    !monthlyIncome ||
    !loanAmount ||
    !loanTenure
  ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create a new loan application with userId from the decoded token
    const newApplication = new LoanApplication({
      userId: req.userId, // Attach the userId from the JWT
      personalDetails: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        age,
        address,
      },
      financialDetails: {
        monthlyIncome,
        requestedLoanAmount: loanAmount,
        tenure: loanTenure,
      },
      cibilScore: 750, // Example CIBIL score, should be dynamically fetched
      dti: (loanAmount / monthlyIncome) * 100, // Debt-to-Income ratio
      status: 'pending',
    });

    // Save the application
    await newApplication.save();

    res.status(201).json({ message: 'Application submitted successfully', applicationId: newApplication._id });
  } catch (error) {
    console.error('Error saving loan application:', error);
    res.status(500).json({ message: 'Application failed', error: error.message });
  }
});


const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    console.log('admin')
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Get all loan applications
// adminAuth, 
router.get('/loan-applications', async (req, res) => {
  // console.log('loan')
  try {
    const applications = await LoanApplication.find();
    res.json(applications);
  } catch (error) {
    console.error('Error fetching loan applications:', error);
    res.status(500).json({ message: 'Error fetching loan applications' });
  }
});

module.exports = router;
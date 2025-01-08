const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/authController');

// POST routes for signup and login
router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;

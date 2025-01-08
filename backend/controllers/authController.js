const User = require('../models/User'); // Assuming you have a User model
const bcrypt = require('bcryptjs'); // For password comparison
const jwt = require('jsonwebtoken'); // For JWT token generation

exports.signUp = async (req, res) => {
    const { name, email, password, phone } = req.body;

    // Basic validation
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user (password will be hashed automatically)
        const newUser = new User({
            name,
            email,
            password,  // This will be hashed by the schema pre-save hook
            phone
        });

        // Save user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

        // Send success response with token
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
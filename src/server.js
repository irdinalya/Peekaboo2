const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = './users.csv';
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, 'username,email,password\n', 'utf8'); // Add a header row for CSV
}

// Helper function to write data to the CSV file
const saveUserToCSV = (username, email, password) => {
    const userData = `${username},${email},${password}\n`;
    fs.appendFileSync(USERS_FILE, userData, 'utf8');
};

// Helper function to check if the user exists
const userExists = (email, password) => {
    if (!fs.existsSync(USERS_FILE)) return false;

    const data = fs.readFileSync(USERS_FILE, 'utf8');
    const users = data.split('\n').map((line) => line.split(','));
    return users.some(([_, savedEmail, savedPassword]) => savedEmail === email && savedPassword === password);
};

// Sign-Up Endpoint
app.post('/signup', (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({message: 'All fields are required.'});
    }

    if (fs.existsSync(USERS_FILE)) {
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        const users = data.split('\n').map((line) => line.split(','));
        if (users.some(([_, savedEmail]) => savedEmail === email)) {
            return res.status(409).json({message: 'User already exists.'});
        }
    }

    const userData = `${username},${email},${password}\n`;
    fs.appendFile(USERS_FILE, userData, 'utf8', (err) => {
        if (err) {
            console.error('Error saving user:', err);
            return res.status(500).json({message: 'Failed to save user.'});
        }
        res.status(200).json({message: 'User registered successfully.'});
    });

// Login Endpoint
    app.post('/login', (req, res) => {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({message: 'All fields are required.'});
        }

        if (userExists(email, password)) {
            res.status(200).json({message: 'Login successful.'});
        } else {
            res.status(401).json({message: 'Login failed. Please register first.'});
        }
    });

// Start the server
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
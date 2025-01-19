const express = require('express');
const cors = require('cors'); // CORS middleware for cross-origin requests
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const fs = require('fs');

const app = express();
const USERS_FILE = './users.csv'; // File path for user data
const PORT = 5000; // Server port

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from the frontend
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
}));
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Ensure the users.csv file exists
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, 'username,email,password\n', 'utf8'); // Add headers to the CSV
}

// Helper function to check if a user exists
const userExists = (email, password) => {
    if (!fs.existsSync(USERS_FILE)) return false;

    const data = fs.readFileSync(USERS_FILE, 'utf8');
    const users = data.split('\n').slice(1); // Skip the header row
    return users.some((line) => {
        const [_, savedEmail, savedPassword] = line.split(',');
        return savedEmail?.trim() === email && savedPassword?.trim() === password;
    });
};

// Helper function to save a new user to the CSV file
const saveUserToCSV = (username, email, password) => {
    const userData = `${username},${email},${password}\n`;
    fs.appendFileSync(USERS_FILE, userData, 'utf8');
};

// Login Endpoint
app.post('/login', (req, res) => {
    const { username,email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    if (!fs.existsSync(USERS_FILE)) {
        return res.status(404).json({ message: 'User database not found.' });
    }

    const data = fs.readFileSync(USERS_FILE, 'utf8');
    const users = data.split('\n').slice(1); // Skip header
    const user = users.find((line) => {
        const [username, email, savedPassword] = line.split(',');
        return (
            (username?.trim() === username || email?.trim() === email) &&
            savedPassword?.trim() === password
        );
    });

    if (user) {
        const [username, email] = user.split(',');
        res.status(200).json({
            message: 'Login successful.',
            username: username.trim(),
            email: email.trim(),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password.' });
    }
});

    if (userExists(email, password)) {
        res.status(200).json({ message: 'Login successful.' });
    } else {
        res.status(401).json({ message: 'Invalid email or password.' });
    }


// Sign-Up Endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the user already exists
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    const users = data.split('\n').map((line) => line.split(','));
    if (users.some(([_, savedEmail]) => savedEmail === email)) {
        return res.status(409).json({ message: 'User already exists.' });
    }

    // Save the user to the CSV file
    saveUserToCSV(username, email, password);
    res.status(200).json({ message: 'User registered successfully.' });
});

// Products File Path
const PRODUCTS_FILE = './products.csv';

// Load Products from CSV
const loadProducts = () => {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim());
    const headers = lines.shift().split(',');

    return lines.map(line => {
        const values = line.split(',');
        return headers.reduce((product, header, index) => {
            product[header.trim()] = values[index]?.trim();
            return product;
        }, {});
    });
};

// Products Endpoint
app.get('/products', (req, res) => {
    try {
        const products = loadProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load products.' });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

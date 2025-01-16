const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.text()); // Middleware to parse plain text data

// Endpoint to save user data
app.post('/save-user', (req, res) => {
    const userData = req.body; // Expecting plain text: "username,email\n"
    fs.appendFile('users.csv', userData, (err) => {
        if (err) {
            console.error('Error saving user:', err);
            return res.status(500).send('Error saving user');
        }
        res.send('User saved successfully');
    });
});

// Start the server
const PORT = 3001; // You can use a different port if needed
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

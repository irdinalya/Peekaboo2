const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.text());

app.post('/save-user', (req, res) => {
    const userData = req.body;
    fs.appendFile('users.csv', userData, (err) => {
        if (err) {
            console.error('Error saving user:', err);
            return res.status(500).send('Error saving user');
        }
        res.send('User saved successfully');
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

// index.js

const express = require('express');
const app = express();
const animalsRoute = require('./api/animals');

const port = process.env.PORT || 3000;

// Use the animals route
app.use('/animals', animalsRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Animal API');
});

// Start the server
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});

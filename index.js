const express = require('express');
const cors = require('cors');
const animalsRoute = require('./api/animals');
const fruitsRoute = require('./api/fruits');
const birdsRoute = require('./api/birds');
const vegetablesRoute = require('./api/vegetables');
const path = require('path');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the images directory
app.use(express.static(path.join(__dirname, 'images')));

// Use the animals route
app.use('/animals', animalsRoute);
// USe the fruits route
app.use('/fruits', fruitsRoute);
// Use the birds route
app.use('/birds', birdsRoute);
// Use the vegetables route
app.use('/vegetables', vegetablesRoute);


// Detail
app.get('/', (req, res) => {
    res.send('Hello Guy! Welcome to CodeWithAngad API');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});


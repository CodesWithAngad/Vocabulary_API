// api/animals.js

const express = require('express');
const router = express.Router();

// Sample data for animals
const animals = [
    { id: 1, name: 'Lion', habitat: 'Savannah' },
    { id: 2, name: 'Penguin', habitat: 'Antarctica' },
    { id: 3, name: 'Elephant', habitat: 'Grasslands' },
];

// GET route to fetch all animals
router.get('/', (req, res) => {
    res.json(animals);
});

// GET route to fetch an animal by ID
router.get('/:id', (req, res) => {
    const animal = animals.find(a => a.id == req.params.id);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
});

module.exports = router;

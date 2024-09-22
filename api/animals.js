// api/animals.js

const express = require('express');
const router = express.Router();

// Sample data for animals
const animals = [
    { id: 1, name: 'Lion'},
    { id: 2, name: 'Tiger'},
    { id: 3, name: 'Elephant'},
    { id: 4, name: 'Giraffe'},
    { id: 5, name: 'Zebra'},
    { id: 6, name: 'Kangaroo'},
    { id: 7, name: 'Panda'},
    { id: 8, name: 'Bear'},
    { id: 9, name: 'Wolf'},
    { id: 10, name: 'Fox'},
    { id: 11, name: 'Deer'},
    { id: 12, name: 'Rabbit'},
    { id: 13, name: 'Squirrel'},
    { id: 14, name: 'Raccoon'},
    { id: 15, name: 'Koala'},
    { id: 16, name: 'Sloth'},
    { id: 17, name: 'Chimpanzee'},
    { id: 18, name: 'Gorilla'},
    { id: 19, name: 'Cheetah'},
    { id: 20, name: 'Leopard'},
    { id: 21, name: 'Bison'},
    { id: 22, name: 'Rhino'},
    { id: 23, name: 'Hippopotamus'},
    { id: 24, name: 'Cat'},
    { id: 25, name: 'Dog'},
    { id: 26, name: 'Horse'},
    { id: 27, name: 'Cow'},
    { id: 28, name: 'Sheep'},
    { id: 29, name: 'Goat'},
    { id: 30, name: 'Pig'},
    { id: 31, name: 'Rabbit'},
    { id: 32, name: 'Sika deer'},
    { id: 33, name: 'Red panda'},
    { id: 34, name: 'Hyena'},
    { id: 35, name: 'Binturong'},
    { id: 36, name: 'Red fox'},
    { id: 37, name: 'Yak'},
    { id: 38, name: 'Camel'},
    { id: 39, name: 'Reindeer'}
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

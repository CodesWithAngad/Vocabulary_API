const express = require('express');
const router = express.Router();

// Sample animal data with images
const animals = [
    {
        id: 1, 
        name: 'Lion', 
        image: 'http://localhost:3000/animals/lion.jpeg' 
    },
    {
        id: 2,
        name: 'Tiger', 
        image: 'http://localhost:3000/animals/tiger.jpeg' 
    },
    {
        id: 3, 
        name: 'Elephant', 
        image: 'http://localhost:3000/animals/elephant.jpeg'
    },
    {
        id: 4, 
        name: 'Giraffe', 
        image: 'http://localhost:3000/animals/giraffe.jpeg'
    },
    {
        id: 5, 
        name: 'Zebra', 
        image: 'http://localhost:3000/animals/zebra.jpeg'
    },
    {
        id: 6, 
        name: 'Kangaroo', 
        image: 'http://localhost:3000/animals/kangaroo.jpeg'
    },
    {
        id: 7, 
        name: 'Panda', 
        image: 'http://localhost:3000/animals/panda.jpeg'
    },
    {
        id: 8, 
        name: 'Bear', 
        image: 'http://localhost:3000/animals/bear.jpeg'
    },
    {
        id: 9, 
        name: 'Wolf', 
        image: 'http://localhost:3000/animals/wolf.jpeg'
    },
    {
        id: 10, 
        name: 'Fox', 
        image: 'http://localhost:3000/animals/fox.jpeg'
    },
    {
        id: 11, 
        name: 'Deer', 
        image: 'http://localhost:3000/animals/deer.jpeg'
    },
    {
        id: 12, 
        name: 'Rabbit', 
        image: 'http://localhost:3000/animals/rabbit.jpeg'
    },
    {
        id: 13, 
        name: 'Squirrel', 
        image: 'http://localhost:3000/animals/squirrel.jpeg'
    },
    {
        id: 14, 
        name: 'Raccoon', 
        image: 'http://localhost:3000/animals/raccoon.jpeg'
    },
    {
        id: 15, 
        name: 'Koala', 
        image: 'http://localhost:3000/animals/koala.jpeg'
    },
    {
        id: 16, 
        name: 'Sloth', 
        image: 'http://localhost:3000/animals/sloth.jpeg'
    },
    {
        id: 17, 
        name: 'Chimpanzee', 
        image: 'http://localhost:3000/animals/chimpanzee.jpeg'
    },
    {
        id: 18, 
        name: 'Gorilla', 
        image: 'http://localhost:3000/animals/gorilla.jpeg'
    },
    {
        id: 19, 
        name: 'Cheetah', 
        image: 'http://localhost:3000/animals/cheetah.jpeg'
    },
    {
        id: 20, 
        name: 'Leopard', 
        image: 'http://localhost:3000/animals/leopard.jpeg'
    },
    {
        id: 21, 
        name: 'Bison', 
        image: 'http://localhost:3000/animals/bison.jpeg'
    },
    {
        id: 22, 
        name: 'Rhino', 
        image: 'http://localhost:3000/animals/rhino.jpeg'
    },
    {
        id: 23, 
        name: 'Hippopotamus', 
        image: 'http://localhost:3000/animals/hippo.jpeg'
    },
    {
        id: 24, 
        name: 'Cat', 
        image: 'http://localhost:3000/animals/cat.jpeg'
    },
    {
        id: 25, 
        name: 'Dog', 
        image: 'http://localhost:3000/animals/dog.jpeg'
    },
    {   
        id: 26, 
        name: 'Horse', 
        image: 'http://localhost:3000/animals/horse.jpeg'
    },
    {
        id: 27, 
        name: 'Cow', 
        image: 'http://localhost:3000/animals/cow.jpeg'
    },
    {
        id: 28, 
        name: 'Sheep', 
        image: 'http://localhost:3000/animals/sheep.jpeg'
    },
    {
        id: 29, 
        name: 'Goat', 
        image: 'http://localhost:3000/animals/goat.jpeg'
    },
    {
        id: 30, 
        name: 'Pig', 
        image: 'http://localhost:3000/animals/pig.jpeg'
    },
    {
        id: 31, 
        name: 'Hyena', 
        image: 'http://localhost:3000/animals/hyena.jpeg'
    },
    {
        id: 32, 
        name: 'Camel', 
        image: 'http://localhost:3000/animals/camel.jpeg'
    },
];

// Route to get animal data
router.get('/', (req, res) => {
    res.json(animals);
});

module.exports = router;


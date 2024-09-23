const express = require('express');
const router = express.Router();

// Sample animal data with images
const animals = [
    {
        id: 1, 
        name: 'Lion', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/lion.jpeg' 
    },
    {
        id: 2,
        name: 'Tiger', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/tiger.jpeg' 
    },
    {
        id: 3, 
        name: 'Elephant', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/elephant.jpeg'
    },
    {
        id: 4, 
        name: 'Giraffe', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/giraffe.jpeg'
    },
    {
        id: 5, 
        name: 'Zebra', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/zebra.jpeg'
    },
    {
        id: 6, 
        name: 'Kangaroo', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/kangaroo.jpeg'
    },
    {
        id: 7, 
        name: 'Panda', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/panda.jpeg'
    },
    {
        id: 8, 
        name: 'Bear', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/bear.jpeg'
    },
    {
        id: 9, 
        name: 'Wolf', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/wolf.jpeg'
    },
    {
        id: 10, 
        name: 'Fox', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/fox.jpeg'
    },
    {
        id: 11, 
        name: 'Deer', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/deer.jpeg'
    },
    {
        id: 12, 
        name: 'Rabbit', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/rabbit.jpeg'
    },
    {
        id: 13, 
        name: 'Squirrel', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/squirrel.jpeg'
    },
    {
        id: 14, 
        name: 'Raccoon', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/raccoon.jpeg'
    },
    {
        id: 15, 
        name: 'Koala', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/koala.jpeg'
    },
    {
        id: 16, 
        name: 'Sloth', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/sloth.jpeg'
    },
    {
        id: 17, 
        name: 'Chimpanzee', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/chimpanzee.jpeg'
    },
    {
        id: 18, 
        name: 'Gorilla', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/gorilla.jpeg'
    },
    {
        id: 19, 
        name: 'Cheetah', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/cheetah.jpeg'
    },
    {
        id: 20, 
        name: 'Leopard', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/leopard.jpeg'
    },
    {
        id: 21, 
        name: 'Bison', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/bison.jpeg'
    },
    {
        id: 22, 
        name: 'Rhino', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/rhino.jpeg'
    },
    {
        id: 23, 
        name: 'Hippopotamus', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/hippo.jpeg'
    },
    {
        id: 24, 
        name: 'Cat', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/cat.jpeg'
    },
    {
        id: 25, 
        name: 'Dog', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/dog.jpeg'
    },
    {   
        id: 26, 
        name: 'Horse', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/horse.jpeg'
    },
    {
        id: 27, 
        name: 'Cow', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/cow.jpeg'
    },
    {
        id: 28, 
        name: 'Sheep', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/sheep.jpeg'
    },
    {
        id: 29, 
        name: 'Goat', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/goat.jpeg'
    },
    {
        id: 30, 
        name: 'Pig', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/pig.jpeg'
    },
    {
        id: 31, 
        name: 'Hyena', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/hyena.jpeg'
    },
    {
        id: 32, 
        name: 'Camel', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/animals/camel.jpeg'
    },
];

// Route to get animal data
router.get('/', (req, res) => {
    res.json(animals);
});

module.exports = router;


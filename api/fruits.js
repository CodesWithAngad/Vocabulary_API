const express = require('express');
const router = express.Router();

// Sample fruit data with images

const fruits = [
    {
        id: 1, 
        name: 'Apple', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/apple.jpeg'
    },
    {
        id: 2, 
        name: 'Banana', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/bananas.jpeg'
    },
    {
        id: 3, 
        name: 'Orange', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/orange.jpeg'
    },
    {
        id: 4, 
        name: 'Date', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/date.jpeg'
    },
    {
        id: 5, 
        name: 'Grape', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/grape.jpeg'
    },
    {
        id: 6, 
        name: 'Strawberry', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/strawberry.jpeg'
    },
    {
        id: 7, 
        name: 'Watermelon', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/watermelon.jpeg'
    },
    {
        id: 8, 
        name: 'Pineapple', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/pineapple.jpeg'
    },
    {
        id: 9, 
        name: 'Mango', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/mango.jpeg'
    },
    {
        id: 10, 
        name: 'Peach',
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/peach.jpeg'
    },
    {
        id: 11, 
        name: 'Cherry', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/cherry.jpeg'
    },
    {
        id: 12, 
        name: 'Blueberry', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/blueberry.jpeg'
    },
    {
        id: 13, 
        name: 'Kiwi', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/kiwi.jpeg'
    },
    {
        id: 14, 
        name: 'Pear', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/pear.jpeg'
    },
    {
        id: 15, 
        name: 'Plum', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/plum.jpeg'
    },
    {
        id: 16, 
        name: 'Papaya', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/papaya.jpeg'
    },
    {
        id: 17, 
        name: 'Guava', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/guava.jpeg'
    },
    {
        id: 18, 
        name: 'Fig', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/fig.jpeg'
    },
    {
        id: 19, 
        name: 'Coconut', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/coconut.jpeg'
    },
    {
        id: 20, 
        name: 'Pomegranate', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/pomegranate.jpeg'
    },
    {
        id: 21, 
        name: 'Raspberry', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/raspberry.jpeg'
    },
    {
        id: 22, 
        name: 'Dragonfruit', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/fruits/dragonfruit.jpeg'
    },
]



// Route to get fruit data
router.get('/', (req, res) => {
    res.json(fruits);
});

module.exports = router;

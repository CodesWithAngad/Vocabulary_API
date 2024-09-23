const express = require('express');
const router = express.Router();

// Sample fruit data with images

const fruits = [
    {
        id: 1, 
        name: 'Apple', 
        image: '#'
    },
    {
        id: 2, 
        name: 'Banana', 
        image: '#'
    },
    {
        id: 3, 
        name: 'Orange', 
        image: '#'
    },
    {
        id: 4, 
        name: 'Date', 
        image: '#'
    },
    {
        id: 5, 
        name: 'Grape', 
        image: '#'
    },
    {
        id: 6, 
        name: 'Strawberry', 
        image: '#'
    },
    {
        id: 7, 
        name: 'Watermelon', 
        image: '#'
    },
    {
        id: 8, 
        name: 'Pineapple', 
        image: '#'
    },
    {
        id: 9, 
        name: 'Mango', 
        image: '#'
    },
    {
        id: 10, 
        name: 'Peach',
        image: '#'
    },
    {
        id: 11, 
        name: 'Cherry', 
        image: '#'
    },
    {
        id: 12, 
        name: 'Blueberry', 
        image: '#'
    },
    {
        id: 13, 
        name: 'Kiwi', 
        image: '#'
    },
    {
        id: 14, 
        name: 'Pear', 
        image: '#'
    },
    {
        id: 15, 
        name: 'Plum', 
        image: '#'
    },
    {
        id: 16, 
        name: 'Papaya', 
        image: '#'
    },
    {
        id: 17, 
        name: 'Guava', 
        image: '#'
    },
    {
        id: 18, 
        name: 'Fig', 
        image: '#'
    },
    {
        id: 19, 
        name: 'Coconut', 
        image: '#'
    },
    {
        id: 20, 
        name: 'Pomegranate', 
        image: '#'
    },
    {
        id: 21, 
        name: 'Raspberry', 
        image: '#'
    },
    {
        id: 22, 
        name: 'Dragonfruit', 
        image: '#'
    },
]



// Route to get fruit data
router.get('/', (req, res) => {
    res.json(fruits);
});

module.exports = router;

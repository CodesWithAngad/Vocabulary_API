const express = require('express');
const router = express.Router();

// Sample birds data with images
const birds = [
    {
        id: 1, 
        name: 'Eagle', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/eagle.jpeg'
    },
    {
        id: 2, 
        name: 'Duck', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/duck.jpeg'
    },
    {
        id: 3, 
        name: 'Hen', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/hen.jpeg'
    },
    {
        id: 4, 
        name: 'Parrot', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/parrot.jpeg'
    },
    {
        id: 5, 
        name: 'Peacock', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/peacock.jpeg'
    },
    {
        id: 6, 
        name: 'Dove', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/dove.jpeg'
    },
    {
        id: 7, 
        name: 'Swan', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/swan.jpeg'
    },
    {
        id: 8, 
        name: 'Pigeon', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/pigeon.jpeg'
    },
    {
        id: 9, 
        name: 'Sparrow', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/sparrow.jpeg'
    },
    {
        id: 10, 
        name: 'Falcon', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/falcon.jpeg'
    },
    {
        id: 11, 
        name: 'Hawk', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/hawk.jpeg'
    },
    {
        id: 12, 
        name: 'Owl', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/owl.jpeg'
    },
    {
        id: 13, 
        name: 'Nightingale', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/nightingale.jpeg'
    },
    {
        id: 14, 
        name: 'Blue Jay', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/bluejay.jpeg'
    },
    {
        id: 15, 
        name: 'Hummingbird', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/hummingbird.jpeg'
    },
    {
        id: 16, 
        name: 'Turkey', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/turkey.jpeg'
    },
    {
        id: 17, 
        name: 'Quail', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/quail.jpeg'
    },
    {
        id: 18, 
        name: 'Pheasant', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/pheasant.jpeg'
    },
    {
        id: 19, 
        name: 'Flamingo', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/flamingo.jpeg'
    },
    {
        id: 20, 
        name: 'Crane', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/crane.jpeg'
    },
    {
        id: 21, 
        name: 'Heron', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/heron.jpeg'
    },
    {
        id: 22, 
        name: 'Egret', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/egret.jpeg'
    },
    {
        id: 23, 
        name: 'Osprey', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/osprey.jpeg'
    },
    {
        id: 24, 
        name: 'Vulture', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/vulture.jpeg'
    },
    {
        id: 25, 
        name: 'Woodpecker', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/woodpecker.jpeg'
    },
    {
        id: 26, 
        name: 'Penguin', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/penguin.jpeg'
    },
    {
        id: 27, 
        name: 'crow', 
        image: 'http://vocabulary-api-codewithangad.vercel.app/birds/crow.jpeg'
    }
]


// Route to get fruit data
router.get('/', (req, res) => {
    res.json(birds);
});

module.exports = router;

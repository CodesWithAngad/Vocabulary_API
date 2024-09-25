const express = require('express');
const router = express.Router();

// Sample vegetable data with images
const vegetables = [
    {
      id: 1,
      name: "Artichoke",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/artichoke.jpg"
    },
    {
      id: 2,
      name: "Asparagus",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/asparagus.jpg"
    },
    {
      id: 3,
      name: "Avocado",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/avocado.jpg"
    },
    {
      id: 4,
      name: "Beet",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/beet.jpg"
    },
    {
      id: 5,
      name: "Broccoli",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/broccoli.jpg"
    },
    {
      id: 6,
      name: "Cauliflower",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cauliflower.jpg"
    },
    {
      id: 7,
      name: "Beans",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/beans.jpg"
    },
    {
      id: 8,
      name: "Tomato",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/tomato.jpg"
    },
    {
      id: 9,
      name: "Bitter Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/bittergourd.jpg"
    },
    {
      id: 10,
      name: "Bottle Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/bottlegourd.jpg"
    },
    {
      id: 11,
      name: "Brinjal",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/brinjal.jpg"
    },
    {
      id: 12,
      name: "Cabbage",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cabbage.jpg"
    },
    {
      id: 13,
      name: "Carrot",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/carrot.jpg"
    },
    {
      id: 14,
      name: "Potato",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/potato.jpg"
    },
    {
      id: 15,
      name: "Celery",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/celery.jpg"
    },
    {
      id: 16,
      name: "Chow Chow",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/chowchow.jpg"
    },
    {
      id: 17,
      name: "Cluster Beans",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/clusterbeans.jpg"
    },
    {
      id: 18,
      name: "Corn",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/corn.jpg"
    },
    {
      id: 19,
      name: "Cucumber",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cucumber.jpg"
    },
    {
      id: 20,
      name: "Drumstick",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/drumstick.jpg"
    },
    {
      id: 21,
      name: "Elephant Yam",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/elephantyam.jpg"
    },
    {
      id: 22,
      name: "Garlic",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/garlic.jpg"
    },
    {
      id: 23,
      name: "Ginger",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ginger.jpg"
    },
    {
      id: 24,
      name: "Peas",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/peas.jpg"
    },
    {
      id: 25,
      name: "Ivy Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ivygourd.jpg"
    },
    {
      id: 26,
      name: "Kale",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/kale.jpg"
    },
    {
      id: 27,
      name: "Lady Finger",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ladyfinger.jpg"
    },
    {
      id: 28,
      name: "Lab Lab",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lablab.jpg"
    },
    {
      id: 29,
      name: "Lemon Grass",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lemongrass.jpg"
    },
    {
      id: 30,
      name: "Lettuce",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lettuce.jpg"
    },
    {
        id : 31,
        name : "Onion",
        image : "http://vocabulary-api-codewithangad.vercel.app/vegetables/onion.jpg"
    }
]

// Route to get vegetables data
router.get('/', (req, res) => {
    res.json(vegetables);
});

module.exports = router;

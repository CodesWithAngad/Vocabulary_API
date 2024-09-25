const express = require('express');
const router = express.Router();

// Sample vegetable data with images
const vegetables = [
    {
      id: 1,
      name: "Artichoke",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/artichoke.jpeg"
    },
    {
      id: 2,
      name: "Asparagus",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/asparagus.jpeg"
    },
    {
      id: 3,
      name: "Avocado",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/avocado.jpeg"
    },
    {
      id: 4,
      name: "Beet",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/beet.jpeg"
    },
    {
      id: 5,
      name: "Broccoli",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/broccoli.jpeg"
    },
    {
      id: 6,
      name: "Cauliflower",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cauliflower.jpeg"
    },
    {
      id: 7,
      name: "Beans",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/beans.jpeg"
    },
    {
      id: 8,
      name: "Tomato",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/tomato.jpeg"
    },
    {
      id: 9,
      name: "Bitter Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/bittergourd.jpeg"
    },
    {
      id: 10,
      name: "Bottle Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/bottlegourd.jpeg"
    },
    {
      id: 11,
      name: "Brinjal",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/brinjal.jpeg"
    },
    {
      id: 12,
      name: "Cabbage",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cabbage.jpeg"
    },
    {
      id: 13,
      name: "Carrot",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/carrot.jpeg"
    },
    {
      id: 14,
      name: "Potato",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/potato.jpeg"
    },
    {
      id: 15,
      name: "Celery",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/celery.jpeg"
    },
    {
      id: 16,
      name: "Chow Chow",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/chowchow.jpeg"
    },
    {
      id: 17,
      name: "Cluster Beans",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/clusterbeans.jpeg"
    },
    {
      id: 18,
      name: "Corn",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/corn.jpeg"
    },
    {
      id: 19,
      name: "Cucumber",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/cucumber.jpeg"
    },
    {
      id: 20,
      name: "Drumstick",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/drumstick.jpeg"
    },
    {
      id: 21,
      name: "Elephant Yam",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/elephantyam.jpeg"
    },
    {
      id: 22,
      name: "Garlic",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/garlic.jpeg"
    },
    {
      id: 23,
      name: "Ginger",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ginger.jpeg"
    },
    {
      id: 24,
      name: "Peas",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/peas.jpeg"
    },
    {
      id: 25,
      name: "Ivy Gourd",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ivygourd.jpeg"
    },
    {
      id: 26,
      name: "Kale",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/kale.jpeg"
    },
    {
      id: 27,
      name: "Lady Finger",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/ladyfinger.jpeg"
    },
    {
      id: 28,
      name: "Lab Lab",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lablab.jpeg"
    },
    {
      id: 29,
      name: "Lemon Grass",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lemongrass.jpeg"
    },
    {
      id: 30,
      name: "Lettuce",
      image: "http://vocabulary-api-codewithangad.vercel.app/vegetables/lettuce.jpeg"
    },
    {
        id : 31,
        name : "Onion",
        image : "http://vocabulary-api-codewithangad.vercel.app/vegetables/onion.jpeg"
    }
]

// Route to get vegetables data
router.get('/', (req, res) => {
    res.json(vegetables);
});

module.exports = router;

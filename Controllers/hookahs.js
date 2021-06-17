// Dependencies

const hookahRouter = require('express').Router();
const Hookah = require('../models/hookah');

// Define routes/controllers

// We are mounting this controller on /vapes

//Hookah Index Route  

hookahRouter.get('/', (req, res) => {
  res.render('hookah/index');
});

// Hookah New Route 

hookahRouter.get('/new', (req, res) => {
  res.render('hookah/new');
});

// Hookah Delete Route

// Hookah Update Route

// Hookah Create Route

  hookahRouter.post('/', (req, res) => {
  Hookah.create(req.body, (err, createdHookah) => {
    res.redirect('/hookahs');
  });
});



// Hookah Edit Route 

// Hookah Show Route


// Exports

module.exports = hookahRouter;
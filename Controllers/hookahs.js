// Dependencies

const Hookahrouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Hookah Index Route  

Hookahrouter.get('/', (req, res) => {
  res.render('hookah/index');
});

// Hookah New Route 

Hookahrouter.get('/new', (req, res) => {
  res.render('hookah/new');
});


// Exports

module.exports = Hookahrouter;
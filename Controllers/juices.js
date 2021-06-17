// Dependencies

const Juicerouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Juice Index Route 

Juicerouter.get('/', (req, res) => {
  res.render('juice/index');
});

// Juice New Index Route 

Juicerouter.get('/new', (req, res) => {
  res.render('juice/new');
});


// Exports

module.exports = Juicerouter;
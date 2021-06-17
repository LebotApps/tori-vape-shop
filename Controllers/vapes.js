// Dependencies

const Vaperouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Vape Index Route 

Vaperouter.get('/', (req, res) => {
  res.render('vapes/index');
});

// Vape New Index Route 

Vaperouter.get('/new', (req, res) => {
  res.render('vapes/new');
});


// Exports

module.exports = Vaperouter;
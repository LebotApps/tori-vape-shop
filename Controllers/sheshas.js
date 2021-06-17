// Dependencies

const Shesharouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Shesha Index Route 

Shesharouter.get('/', (req, res) => {
  res.render('shesha/index');
});

// Shesha New Route 

Shesharouter.get('/new', (req, res) => {
  res.render('shesha/new');
});


// Exports

module.exports = Shesharouter;
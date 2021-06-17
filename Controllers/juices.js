// Dependencies

const juiceRouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Juice Index Route 

juiceRouter.get('/', (req, res) => {
  res.render('juice/index');
});

// Juice New Index Route 

juiceRouter.get('/new', (req, res) => {
  res.render('juice/new');
});


// Exports

module.exports = juiceRouter;
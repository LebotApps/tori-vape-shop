// Dependencies

const sheshaRouter = require('express').Router();

// Define routes/controllers

// We are mounting this controller on /vapes

//Shesha Index Route 

sheshaRouter.get('/', (req, res) => {
  res.render('shesha/index');
});

// Shesha New Route 

sheshaRouter.get('/new', (req, res) => {
  res.render('shesha/new');
});


// Exports

module.exports = sheshaRouter;
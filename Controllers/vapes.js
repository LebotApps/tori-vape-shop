// Dependencies

const vapeRouter = require('express').Router();
const Vape = require('../models/vape');

// Define routes/controllers

// We are mounting this controller on /vapes

//Vape Index Route 

vapeRouter.get('/', (req, res) => {
  res.render('vapes/index');
});

// Vape New Route 

vapeRouter.get('/new', (req, res) => {
  res.render('vapes/new');
});

 // Vape Delete Route

// Vape Update Route


// Vape Create Route

vapeRouter.post('/', (req, res) => {
  Vape.create(req.body, (err, createdVape) => {
    res.redirect('/vapes');
  });
});


// Vape Edit Route 

// Vape Show Route



// Exports

module.exports = vapeRouter;
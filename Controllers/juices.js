// Dependencies

const juiceRouter = require('express').Router();
const Juice = require('../models/juice.js');

// Define routes/controllers

// We are mounting this controller on /vapes

//Juice Index Route 

juiceRouter.get('/', (req, res) => {
  res.render('juice/index');
});

// Juice New Route 

juiceRouter.get('/new', (req, res) => {
  res.render('juice/new');
});

// Juice Delete Route

// Juice Update Route

// Juice Create Route

juiceRouter.post('/', (req, res) => {
  Juice.create(req.body, (err, createdJuice) => {
    res.redirect('/juices');
  });
});


// Juice Edit Route 

// Juice Show Route


// Exports

module.exports = juiceRouter;

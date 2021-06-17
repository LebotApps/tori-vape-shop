// Dependencies

const juiceRouter = require('express').Router();
const Juice = require('../models/juice.js');

// Define routes/controllers

// We are mounting this controller on /vapes

//Juice Index Route 

juiceRouter.get('/', (req, res) => {

  Juice.find({}, (err, juices) => { 
    res.render('juice/index', { juices });
  });
});

// Juice New Route 

juiceRouter.get('/new', (req, res) => {
  res.render('juice/new');
});

// Juice Delete Route

juiceRouter.delete('/:id', (req, res) => {
  Juice.findByIdAndDelete(req.params.id, (err, removedJuice) => {
    res.redirect('/juices')
  });
});

// Juice Update Route

// Juice Create Route

juiceRouter.post('/', (req, res) => {
  Juice.create(req.body, (err, createdJuice) => {
    res.redirect('/juices');
  });
});


// Juice Edit Route 

// Juice Show Route

juiceRouter.get('/:id', (req, res) => {
  Juice.findById(req.params.id, (err, juice) => {
    res.render('juice/show', { juice });
  })
});

// Exports

module.exports = juiceRouter;

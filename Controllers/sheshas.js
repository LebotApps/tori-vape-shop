// Dependencies

const sheshaRouter = require('express').Router();
const Shesha = require('../models/shesha.js');

// Define routes/controllers

// We are mounting this controller on /vapes

//Shesha Index Route 

sheshaRouter.get('/', (req, res) => {

  Shesha.find({}, (err, sheshas) => { 
    res.render('shesha/index', { sheshas });
  });
});

// Shesha New Route 

sheshaRouter.get('/new', (req, res) => {
  res.render('shesha/new');
});

// Shesha Delete Route 

sheshaRouter.delete('/:id', (req, res) => {
  Shesha.findByIdAndDelete(req.params.id, (err, removedShesha) => {
    res.redirect('/sheshas')
  });
});

//Shesha Create Route

sheshaRouter.post('/', (req, res) => {
  Shesha.create(req.body, (err, createdShesha) => {
    res.redirect('/sheshas');
  });
});

// Shesha Show Route 

sheshaRouter.get('/:id', (req, res) => {
  Shesha.findById(req.params.id, (err, shesha) => {
    res.render('shesha/show', { shesha });
  })
});

// Exports

module.exports = sheshaRouter;
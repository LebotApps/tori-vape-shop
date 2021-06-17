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

//Shesha Create Route

sheshaRouter.post('/', (req, res) => {
  Shesha.create(req.body, (err, createdShesha) => {
    res.redirect('/sheshas');
  });
});

// Exports

module.exports = sheshaRouter;
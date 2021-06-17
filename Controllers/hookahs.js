// Dependencies

const hookahRouter = require('express').Router();
const Hookah = require('../models/hookah');

// Define routes/controllers

// We are mounting this controller on /vapes

//Hookah Index Route  

hookahRouter.get('/', (req, res) => {

  Hookah.find({}, (err, hookahs) => { 
    res.render('hookah/index', { hookahs });
  });
});

// Hookah New Route 

hookahRouter.get('/new', (req, res) => {
  res.render('hookah/new');
});

// Hookah Delete Route

hookahRouter.delete('/:id', (req, res) => {
  Hookah.findByIdAndDelete(req.params.id, (err, removedHookah) => {
    res.redirect('/hookahs')
  });
});

// Hookah Update Route

// Hookah Create Route

  hookahRouter.post('/', (req, res) => {
  Hookah.create(req.body, (err, createdHookah) => {
    res.redirect('/hookahs');
  });
});



// Hookah Edit Route 

hookahRouter.get('/:id/edit', (req, res) => {
  Hookah.findById(req.params.id, (err, foundHookah) => {
      res.render('hookah/edit', {
          hookah: foundHookah
      });
  });
});

// Hookah Show Route

hookahRouter.get('/:id', (req, res) => {
  Hookah.findById(req.params.id, (err, hookah) => {
    res.render('hookah/show', { hookah });
  })
});

// Exports

module.exports = hookahRouter;
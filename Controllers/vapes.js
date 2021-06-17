// Dependencies

const vapeRouter = require('express').Router();
const Vape = require('../models/vape');

// Define routes/controllers

// We are mounting this controller on /vapes

//Vape Index Route 

vapeRouter.get('/', (req, res) => {

  Vape.find({}, (err, vapes) => { 
    res.render('vape/index', { vapes });
  });
});


// vape New Route 

vapeRouter.get('/new', (req, res) => {
  res.render('vape/new');
});

// Vape Delete Route

vapeRouter.delete('/:id', (req, res) => {
  Vape.findByIdAndDelete(req.params.id, (err, removedVape) => {
    res.redirect('/vapes')
  });
});

// Vape Update Route

// Vape Create Route

vapeRouter.post('/', (req, res) => {
  Vape.create(req.body, (err, createdVape) => {
    res.redirect('/vapes');
  });
});

// Vape Edit Route 

vapeRouter.get('/:id/edit', (req, res) => {
  Vape.findById(req.params.id, (err, foundVape) => {
      res.render('vape/edit.ejs', {
          vape: foundVape
      });
  });
});

// Vape Show Route

vapeRouter.get('/:id', (req, res) => {
  Vape.findById(req.params.id, (err, vape) => {
    res.render('vape/show', { vape });
  })
});

// Exports

module.exports = vapeRouter;

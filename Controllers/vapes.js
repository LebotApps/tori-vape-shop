// Dependencies

const vapeRouter = require('express').Router();

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

// Vape Create Route

vapeRouter.post('/', (req, res) => {
  Vape.create(req.body, (error, createdVape) => {
      console.log(error, createdVape);
       res.redirect('/vapes');
   })
 })


// Exports

module.exports = vapeRouter;
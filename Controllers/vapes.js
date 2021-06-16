//Dependcies


const express = require('express');
const vapesRouter = express.Router();
const Vape = require('../models/vape');



//ROOT ROUTE
// vapesRouter.get('/', (req, res) => {
//   res.send("it's working");
// });

// Index Route Vapes
vapesRouter.get('/', (req, res) => {
  Vape.find({}, (error, allVapes) => {
      res.render('./vapes/index.ejs', {vapes: allVapes});
  })
});

//NEW ROUTE

vapesRouter.get('/new', (req, res) => {
  res.render('./vapes/new.ejs');
});

//DELETE ROUTE

vapesRouter.delete('/:id', (req, res) =>{
  Vape.findByIdAndDelete(req.params.id, (error, deletedVape)=>{
      res.send({success: true});
  });
});

//UPDATE ROUTE

vapesRouter.put('/:id', (req, res) => {
  Vape.findByIdAndUpdate( req.params.id, 
      req.body, 
      {new: true},
      (error, updatedVape) => {
          res.send(updatedVape);
      }
  );
});

// CREATE ROUTE

vapesRouter.post('/', (req, res) => {
 Vape.create(req.body, (error, createdVape) => {
     console.log(error, createdVape);
      res.redirect('/vapes');
  })
})

// SHOW ROUTE 

vapesRouter.get('/:id', (req, res)=> {
  Vape.findById(req.params.id, (error, foundVape)=>{
      res.send(foundVape);
  });
});

// Export

module.exports = vapesRouter;
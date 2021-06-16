require('dotenv').config();
// Dependencies 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const vape = require('./models/vape');
const juices = require('./models/juices');


//Middleware
//Body parser

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

//Database Connection Error/Success
//Define callback functions for various events 
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//Require Vapes 
const Vape = require('./models/vape');


//ROOT ROUTE
app.get('/', (req, res) => {
    res.send("it's working");
});

// Index Route Vapes
app.get('/vapes', (req, res) => {
    Vape.find({}, (error, allVapes) => {
        res.render('./vapes/index.ejs', {vapes: allVapes});
    })
});

//DELETE ROUTE

app.delete('/vapes/:id', (req, res) =>{
    Vape.findByIdAndDelete(req.params.id, (error, deletedVape)=>{
        res.send({success: true});
    });
});

//UPDATE ROUTE

app.put('/vapes/:id', (req, res) => {
    Vape.findByIdAndUpdate( req.params.id, 
        req.body, 
        {new: true},
        (error, updatedVape) => {
            res.send(updatedVape);
        }
    );
});

//NEW ROUTE

app.get('/vapes/new', (req, res) => {
    res.render('./vapes/new.ejs');
});

// CREATE ROUTE

app.post('/vapes', (req, res) => {
   Vape.create(req.body, (error, createdVape) => {
       console.log(error, createdVape);
        res.redirect('/vapes');
    })
})

// SHOW ROUTE 

app.get("/vapes/:id", (req, res)=> {
    Vape.findById(req.params.id, (error, foundVape)=>{
        res.send(foundVape);
    });
});

//Tell Express To Listen
app.listen(process.env.PORT, () => console.log(`express is listening on port ${process.env.PORT}`));

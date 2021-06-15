require('dotenv').config();
// Dependencies 

const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Middleware
//Body parser

app.use(express.urlencoded({
    extended: true
}));


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
    Vape.find({}, (error, foundVapes) => {
        res.send(foundVapes);
    });
});

//DELETE ROUTE

app.delete('/vapes/:id', (req, res) =>{
    Vape.findByIdAndDelete(req.params.id, (error, deletedVape)=>{
        res.send({success: true});
    });
});

// CREATE ROUTE

app.post('/vapes', (req, res) => {
    Vape.create(req.body, function(error, newVape) {
        res.send(newVape);
    })
});

// SHOW ROUTE 

app.get("/vapes/:id", (req, res)=> {
    Vape.findById(req.params.id, (error, foundVape)=>{
        res.send(foundVape);
    });
});

//Tell Express To Listen
app.listen(process.env.PORT, () => console.log(`express is listening on port ${process.env.PORT}`));
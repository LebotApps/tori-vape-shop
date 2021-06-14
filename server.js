require('dotenv').config();
// Dependencies 

const express = require('express');
const app = express ();
const mongoose = require('mongoose');

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
db.on('error', (err)=> console.log(err.message + ' is mongo not running?'));
db.on('connected', ()=> console.log('mongo connected'));
db.on('disconnected', ()=> console.log('mongo disconnected'));

//ROOT ROUTE
app.get('/', (req, res) => {
        res.send("it's working");
    });


// INDEX ROUTE

app.post('/vapes', (req, res) => {
    res.send('This is the vape page!');
});


//Tell Express To Listen
app.listen(process.env.PORT, () => console.log(`express is listening on port ${process.env.PORT}`));
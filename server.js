require('dotenv').config();

//Dependencies
const express = require('express');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const logger = require('morgan');


// Initialize Express
const app = express();

// Set default view engine
app.set('view engine', 'ejs');


//Database Mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Mongoose Connection Error / Success

db.on('connected', () => console.log('mongo connected'));
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));


// Home Route
app.get('/',(req, res) => res.render('index'));

// Mount Middleware Controllers

const vapesControllers = require('./controllers/vapes.js');
app.use('/vapes', vapesControllers);

const juicesControllers = require('./controllers/juices.js');
app.use('/juices', juicesControllers);

const hookahsControllers = require('./controllers/hookahs.js');
app.use('/hookahs', hookahsControllers);

const sheshasControllers = require('./controllers/sheshas.js');
app.use('/sheshas', sheshasControllers);

//Express Server

app.listen(port, () => {
    console.log('Express is listening on port:{port}');
});
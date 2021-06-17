//Dependencies
const express = require('express');
const port = process.env.PORT || 3000;


// Initialize Express
const app = express();

// Set default view engine
app.set('view engine', 'ejs');
app.set('views', './views')

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
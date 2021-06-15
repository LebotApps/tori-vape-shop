const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vapeSchema = new Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Flavor: {type: String, required: true},
    Price: {type: Number, required: true}
});

const Vape = mongoose.model('Vape', vapeSchema);

module.exports = Vape;
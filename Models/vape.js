const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const vapeSchema = new Schema({
    name: String,
    description: String,
    flavor: String,
    price: Number,
    img: String,
    },
{ timestamps: true});

const Vape = mongoose.model('Vape', vapeSchema);

module.exports = Vape;
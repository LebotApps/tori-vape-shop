const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hookahSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: Number, required: true}
});

const Hookah = mongoose.model('Hookah', hookahSchema);

module.exports = Hookah;
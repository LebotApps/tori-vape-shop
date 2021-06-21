const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sheshaSchema = new Schema({
    name: {type: String, required: true},
    flavor: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true}
});

const Shesha = mongoose.model('Shesha', sheshaSchema);

module.exports = Shesha;
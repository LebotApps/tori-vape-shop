const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const juiceSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    nicotine: {type: String, required: true},
    flavor: {type: String, required: true},
    price: {type: Number, required: true}
});

const Juice = mongoose.model('Juice', juiceSchema);

module.exports = Juice;
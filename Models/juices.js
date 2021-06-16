const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const juiceSchema = new Schema({
  Name: {type: String, required: true},
  Flavor: {type: String, required: true},
  Nicotine: {type: Number, required: true},
  Price: {type: Number, required: true}
});

const Juice = mongoose.model('Juice',juiceSchema);

module.exports = Juice;
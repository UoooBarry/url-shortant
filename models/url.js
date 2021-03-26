const mongoose = require('mongoose');

const { Schema } = mongoose;

const urlSchema = new Schema({
  uuid: { 
    type: String,
    required: [true, 'UUID cannot be empty']
  },
  original_url: {
    type: String,
    required: [true, 'Url cannot be empty']
  }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
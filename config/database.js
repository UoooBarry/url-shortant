const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/', {useNewUrlParser: true, useUnifiedTopology: true})
        .catch(error => console.log(error));
const db = mongoose.connection;

module.exports = db;
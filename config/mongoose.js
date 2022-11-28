const mongoose = require('mongoose');
const env = require('./environment');

mongoose.connect(`mongodb://localhost/${env.db}`);
// mongoose.connect(`mongodb://localhost/codeial_production`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to the database'));
db.once('open', function(){
    console.log('Connected to the database :: Mongodb');
});

module.exports = db;
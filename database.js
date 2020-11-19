const mongoose = require('mongoose');

const dbPass = 'd5N1Dl7qINGbgqCe';
const dbUser = 'dev-laPelu';
const URI = process.env.MONGO_DB || 'mongodb+srv://dev-laPelu:d5N1Dl7qINGbgqCe@cluster0.wgnwn.mongodb.net/dev-laPelu?retryWrites=true&w=majority';

console.log("database fail ")
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log("database connected!!!!!!!!!!!!!!!!!!!!!!!!"))
    .catch(err => console.log("database fail ", err));

module.exports = mongoose;
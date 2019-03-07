const config = require('./config');
const mongoose = require('mongoose');

const { db: { host, port, name, username = '', password = ''}} = config;
let connectionString;

switch (process.env.NODE_ENV) {
    case "dev":
        connectionString = `mongodb://${host}:${port}/${name}`
        break;
    case "prod":
        connectionString = `mongodb://${username}:${password}@${host}:${port}/${name}`
        break;
    default:
        connectionString = 'mongodb://localhost:27017/architect-portfolio'
        break;
}

mongoose.connect(connectionString, {useNewUrlParser: true});

module.exports = mongoose;
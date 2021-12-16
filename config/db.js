const mongoose = require('mongoose');
const config = require('config');
const log = require('../utility/log');

const mongoURI = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);

        log.success('MongoDB connected!!!');
    } catch (err) {
        log.error(err.message);

        process.exit(1);
    }
};

module.exports = connectDB;
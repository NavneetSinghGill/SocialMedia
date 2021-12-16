const colors = require('colors');

const success = (message) => {
    console.log(colors.green(message).inverse);
    // console.log("Succes: " + message);
};

const error = (message) => {
    console.log(colors.red(message).inverse);
    // console.log("Error: " + message);
};

module.exports = {
    success,
    error
};
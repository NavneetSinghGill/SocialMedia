const colors = require('colors');

const success = (message) => {
    console.log(colors.green(message).inverse);
};

const error = (message) => {
    console.log(colors.red(message).inverse);
};

module.exports = {
    success,
    error
};
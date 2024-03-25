const _ = require('lodash');
const validator = require('validator');
const moment = require('moment');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumArray(numbers) {
    return _.sum(numbers);
}

function isValidEmail(email) {
    return validator.isEmail(email);
}

function getCurrentDateTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}


module.exports = {
    random: random,
    sumArray: sumArray,
    isValidEmail: isValidEmail,
    getCurrentDateTime: getCurrentDateTime
};

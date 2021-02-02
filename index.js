'use strict';  // This means that all the code we write have to follow best practice. Has to follow JavaScript Law. 

var moment = require('moment'); // This is older JavaScript same as import moment from 'moment'; This allows it to work across the board

/**
 * Returns a string element with a footer and updating year
 * @param {string} name // The function is going to expect a argument - the type should be string and the argument should be name
 * @return {string} 
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
"use strict";

/**
 * dateIsInvalid
 * Check if a date is invalid or not.
 *
 * @name dateIsInvalid
 * @function
 * @param {Date} d The input date.
 * @returns {Boolean} `true` if the date is invalid, `false` otherwise.
 */
module.exports = function dateIsInvalid (d) {
    let t = d.getTime();
    return t !== t;
};

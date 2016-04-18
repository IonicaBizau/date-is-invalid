"use strict";

const dateIsInvalid = require("../lib");

console.log(dateIsInvalid(new Date()));
// => false

console.log(dateIsInvalid(new Date("foo")));
// => true

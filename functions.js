"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.formatFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (stringOne, stringTwo) {
    if (stringTwo === void 0) { stringTwo = ""; }
    return "".concat(stringOne, " ").concat(stringTwo);
};
exports.addStrings = addStrings;
// introducing union type,
// any of type that are qualify are okay
var format = function (title, params) {
    return "".concat(title, " ").concat(params);
};
exports.format = format;
var formatFormat = function (title, params) {
    console.log((0, exports.format)(title, params));
};
exports.formatFormat = formatFormat;
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join());
}
exports.introduce = introduce;
function getName(user) {
    return user.first + " " + user.last;
}
exports.getName = getName;

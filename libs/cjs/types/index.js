"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check(tar, wish) {
    var tp = get(tar);
    return wish === tp;
}
exports.check = check;
function get(tar) {
    var tp = Object.prototype.toString.call(tar);
    var res = tp.replace('[object ', '').replace(']', '');
    return res;
}
exports.get = get;
function isFunction(tar) {
    return check(tar, 'String');
}
exports.isFunction = isFunction;
function isArray(tar) {
    return check(tar, 'Array');
}
exports.isArray = isArray;
function isObject(tar) {
    return check(tar, 'Object');
}
exports.isObject = isObject;
function isDate(tar) {
    return check(tar, 'Date');
}
exports.isDate = isDate;
function isRegExp(tar) {
    return check(tar, 'RegExp');
}
exports.isRegExp = isRegExp;
function isNumber(tar) {
    return check(tar, 'Number');
}
exports.isNumber = isNumber;
function isString(tar) {
    return check(tar, 'String');
}
exports.isString = isString;
function isBoolean(tar) {
    return check(tar, 'Boolean');
}
exports.isBoolean = isBoolean;
function isError(tar) {
    return check(tar, 'Error');
}
exports.isError = isError;
function isNull(tar) {
    return check(tar, 'Null');
}
exports.isNull = isNull;
exports.default = {
    check: check,
    get: get,
    isBoolean: isBoolean,
    isNumber: isNumber,
    isString: isString,
    isFunction: isFunction,
    isArray: isArray,
    isDate: isDate,
    isRegExp: isRegExp,
    isObject: isObject,
    isError: isError,
    isNull: isNull
};
//# sourceMappingURL=index.js.map
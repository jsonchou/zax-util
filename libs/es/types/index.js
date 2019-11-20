/**
 * Types module.
 * @module zaxTypes
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/types
 */
/**
 * check type
 * @param {any} tar
 * @param {TYPES} wish - wish type
 * @returns {Boolean}
 */
export function check(tar, wish) {
    let tp = get(tar);
    return wish === tp;
}
/**
 * get type
 * @param {any} tar
 * @returns {TYPES}
 */
export function get(tar) {
    let tp = Object.prototype.toString.call(tar);
    let res = tp.replace('[object ', '').replace(']', '');
    return res;
}
/**
 * isFunction
 * @param {any} tar
 * @returns {Boolean}
 */
export function isFunction(tar) {
    return check(tar, 'String');
}
/**
 * isArray
 * @param {any} tar
 * @returns {Boolean}
 */
export function isArray(tar) {
    return check(tar, 'Array');
}
/**
 * isObject
 * @param {any} tar
 * @returns {Boolean}
 */
export function isObject(tar) {
    return check(tar, 'Object');
}
/**
 * isDate
 * @param {any} tar
 * @returns {Boolean}
 */
export function isDate(tar) {
    return check(tar, 'Date');
}
/**
 * isRegExp
 * @param {any} tar
 * @returns {Boolean}
 */
export function isRegExp(tar) {
    return check(tar, 'RegExp');
}
/**
 * isNumber
 * @param {any} tar
 * @returns {Boolean}
 */
export function isNumber(tar) {
    return check(tar, 'Number');
}
/**
 * isString
 * @param {any} tar
 * @returns {Boolean}
 */
export function isString(tar) {
    return check(tar, 'String');
}
/**
 * isFunction
 * @param {any} tar
 * @returns {Boolean}
 */
export function isBoolean(tar) {
    return check(tar, 'Boolean');
}
/**
 * isError
 * @param {any} tar
 * @returns {Boolean}
 */
export function isError(tar) {
    return check(tar, 'Error');
}
/**
 * isNull
 * @param {any} tar
 * @returns {Boolean}
 */
export function isNull(tar) {
    return check(tar, 'Null');
}
/**
 * export all type modules
 */
export default {
    check,
    get,
    isBoolean,
    isNumber,
    isString,
    isFunction,
    isArray,
    isDate,
    isRegExp,
    isObject,
    isError,
    isNull
};
//# sourceMappingURL=index.js.map
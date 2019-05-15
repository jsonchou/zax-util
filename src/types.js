/**
 * types check
 * partial from dm-util
 */

const TYPES_LIST = 'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ');
let TYPES_OBJECT = {};
TYPES_LIST.forEach(function(item) {
    TYPES_OBJECT["is" + item] = function(data) {
        return Object.prototype.toString.call(data) === '[object ' + item + ']';
    };
});

export default {
    /**
     * check type
     * @param {objevt} o 
     * @param {string} wish 
     */
    check(o, wish) {
        var tp = Object.prototype.toString.call(o).toLowerCase();
        return tp === '[object ' + wish.toLowerCase() + ']';
    },
    /**
     * get type
     * @param {object} o 
     */
    get(o) {
        var tp = Object.prototype.toString.call(o).toLowerCase();
        return tp.replace('[object ', '').replace(']', '');
    },
    isFunction: TYPES_OBJECT.isFunction,
    isArray: TYPES_OBJECT.isArray,
    isObject: TYPES_OBJECT.isObject,
    isDate: TYPES_OBJECT.isDate,
    isRegExp: TYPES_OBJECT.isRegExp,
    isNumber: TYPES_OBJECT.isNumber,
    isString: TYPES_OBJECT.isString,
    isBoolean: TYPES_OBJECT.isBoolean,
}
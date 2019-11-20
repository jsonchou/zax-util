/**
 * Types module.
 * @module zaxTypes
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/types
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * check type
     * @param {any} tar
     * @param {TYPES} wish - wish type
     * @returns {Boolean}
     */
    function check(tar, wish) {
        var tp = get(tar);
        return wish === tp;
    }
    exports.check = check;
    /**
     * get type
     * @param {any} tar
     * @returns {TYPES}
     */
    function get(tar) {
        var tp = Object.prototype.toString.call(tar);
        var res = tp.replace('[object ', '').replace(']', '');
        return res;
    }
    exports.get = get;
    /**
     * isFunction
     * @param {any} tar
     * @returns {Boolean}
     */
    function isFunction(tar) {
        return check(tar, 'String');
    }
    exports.isFunction = isFunction;
    /**
     * isArray
     * @param {any} tar
     * @returns {Boolean}
     */
    function isArray(tar) {
        return check(tar, 'Array');
    }
    exports.isArray = isArray;
    /**
     * isObject
     * @param {any} tar
     * @returns {Boolean}
     */
    function isObject(tar) {
        return check(tar, 'Object');
    }
    exports.isObject = isObject;
    /**
     * isDate
     * @param {any} tar
     * @returns {Boolean}
     */
    function isDate(tar) {
        return check(tar, 'Date');
    }
    exports.isDate = isDate;
    /**
     * isRegExp
     * @param {any} tar
     * @returns {Boolean}
     */
    function isRegExp(tar) {
        return check(tar, 'RegExp');
    }
    exports.isRegExp = isRegExp;
    /**
     * isNumber
     * @param {any} tar
     * @returns {Boolean}
     */
    function isNumber(tar) {
        return check(tar, 'Number');
    }
    exports.isNumber = isNumber;
    /**
     * isString
     * @param {any} tar
     * @returns {Boolean}
     */
    function isString(tar) {
        return check(tar, 'String');
    }
    exports.isString = isString;
    /**
     * isFunction
     * @param {any} tar
     * @returns {Boolean}
     */
    function isBoolean(tar) {
        return check(tar, 'Boolean');
    }
    exports.isBoolean = isBoolean;
    /**
     * isError
     * @param {any} tar
     * @returns {Boolean}
     */
    function isError(tar) {
        return check(tar, 'Error');
    }
    exports.isError = isError;
    /**
     * isNull
     * @param {any} tar
     * @returns {Boolean}
     */
    function isNull(tar) {
        return check(tar, 'Null');
    }
    exports.isNull = isNull;
    /**
     * export all type modules
     */
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
});
//# sourceMappingURL=index.js.map
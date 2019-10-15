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
    function check(obj, wish) {
        var tp = get(obj);
        return wish === tp;
    }
    exports.check = check;
    function get(obj) {
        var tp = Object.prototype.toString.call(obj);
        return tp.replace('[object ', '').replace(']', '');
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
});
//# sourceMappingURL=index.js.map
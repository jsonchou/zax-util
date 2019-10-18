/**
 * Types module.
 * @module zaxTypes
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/types
 */
/** @type {TYPES} */
export declare type TYPES = 'Boolean' | 'Number' | 'String' | 'Function' | 'Array' | 'Date' | 'RegExp' | 'Object' | 'Error' | 'Null';
/**
 * check type
 * @param {any} tar
 * @param {TYPES} wish - wish type
 * @returns {Boolean}
 */
export declare function check(tar: any, wish: TYPES): boolean;
/**
 * get type
 * @param {any} tar
 * @returns {TYPES}
 */
export declare function get(tar: any): TYPES;
/**
 * isFunction
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isFunction(tar: any): boolean;
/**
 * isArray
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isArray(tar: any): boolean;
/**
 * isObject
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isObject(tar: any): boolean;
/**
 * isDate
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isDate(tar: any): boolean;
/**
 * isRegExp
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isRegExp(tar: any): boolean;
/**
 * isNumber
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isNumber(tar: any): boolean;
/**
 * isString
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isString(tar: any): boolean;
/**
 * isFunction
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isBoolean(tar: any): boolean;
/**
 * isError
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isError(tar: any): boolean;
/**
 * isNull
 * @param {any} tar
 * @returns {Boolean}
 */
export declare function isNull(tar: any): boolean;
declare const _default: {
    check: typeof check;
    get: typeof get;
    isBoolean: typeof isBoolean;
    isNumber: typeof isNumber;
    isString: typeof isString;
    isFunction: typeof isFunction;
    isArray: typeof isArray;
    isDate: typeof isDate;
    isRegExp: typeof isRegExp;
    isObject: typeof isObject;
    isError: typeof isError;
    isNull: typeof isNull;
};
/**
 * export all type modules
 */
export default _default;

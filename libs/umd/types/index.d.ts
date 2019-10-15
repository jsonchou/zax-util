declare type TYPES = 'Boolean' | 'Number' | 'String' | 'Function' | 'Array' | 'Date' | 'RegExp' | 'Object' | 'Error' | 'Null';
export declare function check(obj: any, wish: TYPES): boolean;
export declare function get(obj: any): string;
export declare function isFunction(tar: any): boolean;
export declare function isArray(tar: any): boolean;
export declare function isObject(tar: any): boolean;
export declare function isDate(tar: any): boolean;
export declare function isRegExp(tar: any): boolean;
export declare function isNumber(tar: any): boolean;
export declare function isString(tar: any): boolean;
export declare function isBoolean(tar: any): boolean;
export declare function isError(tar: any): boolean;
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
export default _default;
declare const _default: {
    zaxString: {
        isString: typeof import("./types").isString;
    };
    zaxFunc: {
        isFunction: typeof import("./types").isFunction;
        lazy: typeof import("./func").lazy;
        sleep: typeof import("./func").sleep;
    };
    zaxArray: {
        isArray: typeof import("./types").isArray;
        sort: typeof import("./array").sort;
        unique: typeof import("./array").unique;
    };
    zaxObject: {
        isObject: typeof import("./types").isObject;
    };
    zaxRegex: {
        email: string;
        date: string;
        qq: string;
        tel: string;
        idcard: string;
        mobile: string;
        phone: string;
    };
    zaxRegexForm: {
        matchRegex: typeof import("./regexForm").matchRegex;
        isDate: typeof import("./regexForm").isDate;
        isEmail: typeof import("./regexForm").isEmail;
        isIdcard: typeof import("./regexForm").isIdcard;
        isMobile: typeof import("./regexForm").isMobile;
        isPhone: typeof import("./regexForm").isPhone;
        isQQ: typeof import("./regexForm").isQQ;
        isTel: typeof import("./regexForm").isTel;
    };
    zaxTypes: {
        check: typeof import("./types").check;
        get: typeof import("./types").get;
        isBoolean: typeof import("./types").isBoolean;
        isNumber: typeof import("./types").isNumber;
        isString: typeof import("./types").isString;
        isFunction: typeof import("./types").isFunction;
        isArray: typeof import("./types").isArray;
        isDate: typeof import("./types").isDate;
        isRegExp: typeof import("./types").isRegExp;
        isObject: typeof import("./types").isObject;
        isError: typeof import("./types").isError;
        isNull: typeof import("./types").isNull;
    };
    zaxCases: {
        cleancase: typeof import("./cases").cleancase;
        camelcase: typeof import("./cases").camelcase;
        pascalcase: typeof import("./cases").pascalcase;
        snakecase: typeof import("./cases").snakecase;
        pathcase: typeof import("./cases").pathcase;
        sentencecase: typeof import("./cases").sentencecase;
        dotcase: typeof import("./cases").dotcase;
        dashcase: typeof import("./cases").dashcase;
    };
};
export default _default;

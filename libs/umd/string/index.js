/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isString = exports.trimEnd = exports.trimStart = exports.trim = exports.padEnd = exports.padStart = exports.striptags = exports.ellipsis = exports.toMonth = exports.toDay = exports.toWord = exports.parseString = exports.queryString = void 0;
    var index_1 = require("../types/index");
    Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return index_1.isString; } });
    var striptags = require('striptags');
    exports.striptags = striptags;
    var SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', "\"", '`', ' '];
    var numbers = {
        'zh-cn': ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        'en-us': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    };
    var days = {
        'zh-cn': ['日', '一', '二', '三', '四', '五', '六'],
        'en-us': ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    };
    var months = {
        'zh-cn': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        'en-us': ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    };
    function charEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    /**
     * Convert object to kindof querystring.
     * 0 - 10
     *
     * @example
     * ```js
     * queryString({ k: 1, v: false, b: true, d: '', x: undefined, p: undefined })
     * //=> k=1&v=false&b=true
     * ```
     *
     * @param obj {Object} object
     * @returns {String} string
     */
    var queryString = function (obj, option) {
        if (!option) {
            option = {};
        }
        var opt = Object.assign({ joinWith: '&', perfectResult: true }, __assign({}, option));
        var arr = Object.keys(obj).reduce(function (sum, item) {
            var val = obj[item];
            if (opt.perfectResult) {
                if (val || val === false) {
                    sum.push(item + "=" + val);
                }
            }
            else {
                sum.push(item + "=" + val);
            }
            return sum;
        }, []);
        if (arr && arr.length) {
            return arr.join(opt.joinWith);
        }
        return '';
    };
    exports.queryString = queryString;
    /**
     * Convert object to kindof querystring.
     * 0 - 10
     *
     * @example
     * ```js
     * parseString("k=1&v=false&b=true&d=&x=undefined&p=undefined")
     * //=> { k: 1, v: false, b: true }
     * ```
     *
     * @param str {String} string
     * @returns {String} string
     */
    var parseString = function (str, option) {
        if (!option) {
            option = {};
        }
        var opt = Object.assign({ joinWith: '&', perfectResult: true }, __assign({}, option));
        var obj = str.split(opt.joinWith).reduce(function (sum, item) {
            var _a = __read(item.split('='), 2), first = _a[0], second = _a[1];
            if (!opt.perfectResult) {
                // dirty control
                sum[first] = second;
            }
            else {
                if (second && second !== 'undefined') {
                    if (second === 'true' || second === 'false') {
                        second = (second === 'true' ? true : false);
                    }
                    else {
                        // fix correct number
                        try {
                            /* istanbul ignore next */
                            if (!isNaN(second)) {
                                // 是数字
                                second = Number(second);
                            }
                        }
                        catch (err) {
                            /* istanbul ignore next */
                            console.log('parseString err', err);
                        }
                    }
                    sum[first] = second;
                }
            }
            return sum;
        }, {});
        return obj;
    };
    exports.parseString = parseString;
    /**
     * Number to english word.
     * 0 - 10
     *
     * @example
     * ```js
     * toWord(1)
     * //=> one
     * ```
     *
     * @param num {Number} number
     * @param locale {NumberKeys} locale
     * @returns {String} locale of number
     */
    var toWord = function (num, locale) {
        if (locale === void 0) { locale = 'en-us'; }
        return numbers[locale][num];
    };
    exports.toWord = toWord;
    /**
     * number to day.
     * Sunday - Saturday : 0 - 6
     *
     * @example
     * ```js
     * toDay(0)
     * //=> 日
     * ```
     *
     * @param num {Number} number
     * @param locale {daysKeys} locale
     * @returns {String} day of number
     */
    var toDay = function (num, locale) {
        if (locale === void 0) { locale = 'zh-cn'; }
        return days[locale][num];
    };
    exports.toDay = toDay;
    /**
     * number to month.
     * Jan - Dec : 1 - 12
     *
     * @example
     * ```js
     * toMonth(12)
     * //=> 十二
     * ```
     *
     * @param num {Number} number
     * @param locale {MonthKeys} locale
     * @returns {String} day of month
     */
    var toMonth = function (num, locale) {
        if (locale === void 0) { locale = 'zh-cn'; }
        return months[locale][num - 1];
    };
    exports.toMonth = toMonth;
    /**
     * cut & ellipsis string.
     *
     * @example
     * ```js
     * ellipsis("qwertyuiop", 5, '*', 3)
     * //=> qwert***
     * ```
     *
     * @param str {String} target
     * @param limit {Number} limit
     * @param tail {SpecialCharType} tail
     * @param tailRepeatTime {Number} tail repeat times
     * @returns {String} string of result
     */
    var ellipsis = function (str, limit, tail, tailRepeatTime) {
        if (limit === void 0) { limit = 10; }
        if (tail === void 0) { tail = '.'; }
        if (tailRepeatTime === void 0) { tailRepeatTime = 3; }
        if (!str) {
            return '';
        }
        str = striptags(str);
        if (str.length <= limit) {
            return str;
        }
        return striptags(str).substr(0, limit) + tail.repeat(tailRepeatTime);
    };
    exports.ellipsis = ellipsis;
    /**
     * left pad with char.
     *
     * @example
     * ```js
     * padStart(5,2)
     * //=> 05
     * ```
     *
     * @param str {String} target
     * @param limit {Number} limit
     * @param repeatWith {String} repeatWith
     * @returns {String} string of result
     */
    var padStart = function (str, limit, repeatWith) {
        if (limit === void 0) { limit = 2; }
        if (repeatWith === void 0) { repeatWith = '0'; }
        str = String(str);
        var strLen = str.length;
        if (strLen < limit) {
            return repeatWith.repeat(limit - strLen) + str;
        }
        return str;
    };
    exports.padStart = padStart;
    /**
     * right pad with char.
     *
     * @example
     * ```js
     * padEnd(5,2)
     * //=> 50
     * ```
     *
     * @param str {String} target
     * @param limit {Number} limit
     * @param repeatWith {String} repeatWith
     * @returns {String} string of result
     */
    var padEnd = function (str, limit, repeatWith) {
        if (limit === void 0) { limit = 2; }
        if (repeatWith === void 0) { repeatWith = '0'; }
        str = String(str);
        var strLen = str.length;
        if (strLen < limit) {
            return str + repeatWith.repeat(limit - strLen);
        }
        return str;
    };
    exports.padEnd = padEnd;
    /**
     * trim first & last letter.
     *
     * @example
     * ```js
     * trim('/pages/index/','/')
     * //=> pages/index
     * ```
     *
     * @param str {String} target
     * @param tarChar {String} target of replace string
     * @param replaceWith {String} replace with
     * @returns {String} string of result
     */
    var trim = function (str, tarChar, replaceWith) {
        if (tarChar === void 0) { tarChar = ' '; }
        if (replaceWith === void 0) { replaceWith = ''; }
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
        str = String(str).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        if (!tarChar) {
            tarChar = ' ';
        }
        if (!replaceWith) {
            replaceWith = '';
        }
        // fix with special quote
        tarChar = charEscape(tarChar);
        var rex = new RegExp("^" + tarChar + "|" + tarChar + "$", 'g');
        return str.replace(rex, replaceWith);
    };
    exports.trim = trim;
    /**
     * trim start.
     *
     * @example
     * ```js
     * trimStart('/pages/index/','/')
     * //=> pages/index/
     * ```
     *
     * @param str {String} target
     * @param tarChar {String} target of replace string
     * @param replaceWith {String} replace with
     * @returns {String} string of result
     */
    var trimStart = function (str, tarChar, replaceWith) {
        if (tarChar === void 0) { tarChar = ' '; }
        if (replaceWith === void 0) { replaceWith = ''; }
        str = trim(String(str));
        if (!tarChar) {
            tarChar = ' ';
        }
        if (!replaceWith) {
            replaceWith = '';
        }
        tarChar = charEscape(tarChar);
        var rex = new RegExp("^" + tarChar, 'g');
        return str.replace(rex, replaceWith);
    };
    exports.trimStart = trimStart;
    /**
     * trim end.
     *
     * @example
     * ```js
     * trimEnd('/pages/index/','/')
     * //=> /pages/index
     * ```
     *
     * @param str {String} target
     * @param tarChar {String} target of replace string
     * @param replaceWith {String} replace with
     * @returns {String} string of result
     */
    var trimEnd = function (str, tarChar, replaceWith) {
        if (tarChar === void 0) { tarChar = ' '; }
        if (replaceWith === void 0) { replaceWith = ''; }
        str = trim(String(str));
        if (!tarChar) {
            tarChar = ' ';
        }
        if (!replaceWith) {
            replaceWith = '';
        }
        tarChar = charEscape(tarChar);
        var rex = new RegExp(tarChar + "$", 'g');
        return str.replace(rex, replaceWith);
    };
    exports.trimEnd = trimEnd;
    /* istanbul ignore next */
    var expData = {
        queryString: queryString,
        parseString: parseString,
        toWord: toWord,
        toDay: toDay,
        toMonth: toMonth,
        ellipsis: ellipsis,
        striptags: striptags,
        padStart: padStart,
        padEnd: padEnd,
        trim: trim,
        trimStart: trimStart,
        trimEnd: trimEnd,
        isString: index_1.isString
    };
    exports.default = expData;
});
//# sourceMappingURL=index.js.map
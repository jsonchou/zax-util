/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index", "striptags"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("../types/index");
    exports.isString = index_1.isString;
    var striptags_1 = __importDefault(require("striptags"));
    exports.striptags = striptags_1.default;
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
    /**
     * number to english word.
     * 0 - 10
     *
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
     * ```js
     * ellipsis("qwertyuiop", 5, '*', 3)
     * //=> qwert***
     * ```
     *
     * @param str {String} target
     * @param limit {Number} limit
     * @param tail {SpecialCharType} tail
     * @param tailRepeatTime {Number} tail repeat time
     * @returns {String} string of result
     */
    var ellipsis = function (str, limit, tail, tailRepeatTime) {
        if (limit === void 0) { limit = 10; }
        if (tail === void 0) { tail = '.'; }
        if (tailRepeatTime === void 0) { tailRepeatTime = 3; }
        if (!str) {
            return '';
        }
        str = striptags_1.default(str);
        if (str.length <= limit) {
            return str;
        }
        return striptags_1.default(str).substr(0, limit) + tail.repeat(tailRepeatTime);
    };
    exports.ellipsis = ellipsis;
    /* istanbul ignore next */
    var expData = {
        toWord: toWord,
        toDay: toDay,
        toMonth: toMonth,
        ellipsis: ellipsis,
        striptags: striptags_1.default,
        isString: index_1.isString
    };
    exports.default = expData;
});
//# sourceMappingURL=index.js.map
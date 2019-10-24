/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
import { isString } from '../types/index';
import striptags from 'striptags';
const SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', `"`, '`', ' '];
const numbers = {
    'zh-cn': ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    'en-us': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
};
const days = {
    'zh-cn': ['日', '一', '二', '三', '四', '五', '六'],
    'en-us': ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
};
const months = {
    'zh-cn': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    'en-us': ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
};
/**
 * number to english word.
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
const toWord = (num, locale = 'en-us') => {
    return numbers[locale][num];
};
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
const toDay = (num, locale = 'zh-cn') => {
    return days[locale][num];
};
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
const toMonth = (num, locale = 'zh-cn') => {
    return months[locale][num - 1];
};
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
const ellipsis = (str, limit = 10, tail = '.', tailRepeatTime = 3) => {
    if (!str) {
        return '';
    }
    str = striptags(str);
    if (str.length <= limit) {
        return str;
    }
    return striptags(str).substr(0, limit) + tail.repeat(tailRepeatTime);
};
/**
 * left pad with char.
 *
 * @example
 * ```js
 * lpad(5)
 * //=> 05
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const lpad = (str, limit, repeatWith) => {
    str = String(str);
    let strLen = str.length;
    if (strLen < limit) {
        return repeatWith.repeat(limit - strLen) + str;
    }
    return str;
};
/**
 * right pad with char.
 *
 * @example
 * ```js
 * rpad(5)
 * //=> 05
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const rpad = (str, limit, repeatWith) => {
    str = String(str);
    let strLen = str.length;
    if (strLen < limit) {
        return str + repeatWith.repeat(limit - strLen);
    }
    return str;
};
/* istanbul ignore next */
const expData = {
    toWord,
    toDay,
    toMonth,
    ellipsis,
    striptags,
    lpad,
    rpad,
    isString
};
export { toWord, toDay, toMonth, ellipsis, striptags, lpad, rpad, isString };
export default expData;
//# sourceMappingURL=index.js.map
/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
import { isString } from '../types/index';
import { striptags } from './striptags';
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
function charEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
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
 * padStart(5,2)
 * //=> 05
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const padStart = (str, limit = 2, repeatWith = '0') => {
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
 * padEnd(5,2)
 * //=> 50
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const padEnd = (str, limit = 2, repeatWith = '0') => {
    str = String(str);
    let strLen = str.length;
    if (strLen < limit) {
        return str + repeatWith.repeat(limit - strLen);
    }
    return str;
};
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
const trim = (str, tarChar = ' ', replaceWith = '') => {
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
    let rex = new RegExp(`^${tarChar}|${tarChar}$`, 'g');
    return str.replace(rex, replaceWith);
};
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
const trimStart = (str, tarChar = ' ', replaceWith = '') => {
    str = trim(String(str));
    if (!tarChar) {
        tarChar = ' ';
    }
    if (!replaceWith) {
        replaceWith = '';
    }
    tarChar = charEscape(tarChar);
    let rex = new RegExp(`^${tarChar}`, 'g');
    return str.replace(rex, replaceWith);
};
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
const trimEnd = (str, tarChar = ' ', replaceWith = '') => {
    str = trim(String(str));
    if (!tarChar) {
        tarChar = ' ';
    }
    if (!replaceWith) {
        replaceWith = '';
    }
    tarChar = charEscape(tarChar);
    let rex = new RegExp(`${tarChar}$`, 'g');
    return str.replace(rex, replaceWith);
};
/* istanbul ignore next */
const expData = {
    toWord,
    toDay,
    toMonth,
    ellipsis,
    striptags,
    padStart,
    padEnd,
    trim,
    trimStart,
    trimEnd,
    isString
};
export { toWord, toDay, toMonth, ellipsis, striptags, padStart, padEnd, trim, trimStart, trimEnd, isString };
export default expData;
//# sourceMappingURL=index.js.map
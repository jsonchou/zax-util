/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
import { isString } from '../types/index';
declare const striptags: any;
declare const SpecialChar: readonly ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", "?", "-", "=", "[", "]", ";", "'", ",", ".", "/", "\"", "`", " "];
declare type SpecialCharType = typeof SpecialChar[number];
declare const numbers: {
    'zh-cn': string[];
    'en-us': string[];
};
declare const days: {
    'zh-cn': string[];
    'en-us': string[];
};
declare const months: {
    'zh-cn': string[];
    'en-us': string[];
};
declare type NumberKeys = keyof typeof numbers;
declare type daysKeys = keyof typeof days;
declare type MonthKeys = keyof typeof months;
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
declare const queryString: (obj: Record<string, string | number | boolean | undefined>, option?: Partial<{
    joinWith: string;
    perfectResult: boolean;
}> | undefined) => string;
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
declare const parseString: (str: string, option?: Partial<{
    joinWith: string;
    perfectResult: boolean;
}> | undefined) => Record<string, string | number | boolean>;
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
declare const toWord: (num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, locale?: NumberKeys) => string;
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
declare const toDay: (num: 0 | 1 | 2 | 3 | 4 | 5 | 6, locale?: daysKeys) => string;
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
declare const toMonth: (num: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, locale?: MonthKeys) => string;
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
declare const ellipsis: (str: string, limit?: number, tail?: SpecialCharType, tailRepeatTime?: number) => string;
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
declare const padStart: (str: string | number, limit?: number, repeatWith?: string) => string;
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
declare const padEnd: (str: string | number, limit?: number, repeatWith?: string) => string;
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
declare const trim: (str: string | number, tarChar?: string, replaceWith?: string) => string;
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
declare const trimStart: (str: string | number, tarChar?: string, replaceWith?: string) => string;
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
declare const trimEnd: (str: string | number, tarChar?: string, replaceWith?: string) => string;
declare const expData: {
    queryString: (obj: Record<string, string | number | boolean | undefined>, option?: Partial<{
        joinWith: string;
        perfectResult: boolean;
    }> | undefined) => string;
    parseString: (str: string, option?: Partial<{
        joinWith: string;
        perfectResult: boolean;
    }> | undefined) => Record<string, string | number | boolean>;
    toWord: (num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, locale?: NumberKeys) => string;
    toDay: (num: 0 | 1 | 2 | 3 | 4 | 5 | 6, locale?: daysKeys) => string;
    toMonth: (num: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, locale?: MonthKeys) => string;
    ellipsis: (str: string, limit?: number, tail?: SpecialCharType, tailRepeatTime?: number) => string;
    striptags: any;
    padStart: (str: string | number, limit?: number, repeatWith?: string) => string;
    padEnd: (str: string | number, limit?: number, repeatWith?: string) => string;
    trim: (str: string | number, tarChar?: string, replaceWith?: string) => string;
    trimStart: (str: string | number, tarChar?: string, replaceWith?: string) => string;
    trimEnd: (str: string | number, tarChar?: string, replaceWith?: string) => string;
    isString: typeof isString;
};
export { SpecialCharType, NumberKeys, daysKeys, MonthKeys, queryString, parseString, toWord, toDay, toMonth, ellipsis, striptags, padStart, padEnd, trim, trimStart, trimEnd, isString };
export default expData;

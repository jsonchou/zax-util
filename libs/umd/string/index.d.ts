/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */
import { isString } from '../types/index';
import striptags from 'striptags';
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
declare const toWord: (num: 0 | 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3, locale?: "zh-cn" | "en-us") => string;
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
declare const toDay: (num: 0 | 1 | 2 | 6 | 5 | 4 | 3, locale?: "zh-cn" | "en-us") => string;
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
declare const toMonth: (num: 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 11 | 12, locale?: "zh-cn" | "en-us") => string;
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
declare const ellipsis: (str: string, limit?: number, tail?: "]" | "~" | "!" | "@" | "#" | "$" | "%" | "^" | "&" | "*" | "(" | ")" | "_" | "+" | "{" | "}" | "|" | ":" | "<" | ">" | "?" | "-" | "=" | "[" | ";" | "'" | "," | "." | "/" | "\"" | "`" | " ", tailRepeatTime?: number) => string;
declare const expData: {
    toWord: (num: 0 | 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3, locale?: "zh-cn" | "en-us") => string;
    toDay: (num: 0 | 1 | 2 | 6 | 5 | 4 | 3, locale?: "zh-cn" | "en-us") => string;
    toMonth: (num: 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 11 | 12, locale?: "zh-cn" | "en-us") => string;
    ellipsis: (str: string, limit?: number, tail?: "]" | "~" | "!" | "@" | "#" | "$" | "%" | "^" | "&" | "*" | "(" | ")" | "_" | "+" | "{" | "}" | "|" | ":" | "<" | ">" | "?" | "-" | "=" | "[" | ";" | "'" | "," | "." | "/" | "\"" | "`" | " ", tailRepeatTime?: number) => string;
    striptags: typeof striptags;
    isString: typeof isString;
};
export { SpecialCharType, NumberKeys, daysKeys, MonthKeys, toWord, toDay, toMonth, ellipsis, striptags, isString };
export default expData;

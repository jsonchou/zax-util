/**
 * String module.
 * @module zaxString
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 */
import { isString } from '../types/index';
import striptags from 'striptags';
declare const SpecialChar: readonly ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", "?", "-", "=", "[", "]", ";", "'", ",", ".", "/", "\"", "`", " "];
export declare type SpecialCharType = typeof SpecialChar[number];
/**
 * ellipsis string.
 *
 * ```js
 * ellipsis("qwertyuiop", 5, '*', 3);
 * //=> qwert***
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param tail {SpecialCharType} tail
 * @param tailLength {Number} tail length
 * @readonly {MixArray | void}
 */
declare const ellipsis: (str: string, limit?: number, tail?: "]" | "~" | "!" | "@" | "#" | "$" | "%" | "^" | "&" | "*" | "(" | ")" | "_" | "+" | "{" | "}" | "|" | ":" | "<" | ">" | "?" | "-" | "=" | "[" | ";" | "'" | "," | "." | "/" | "\"" | "`" | " ", tailLength?: number) => string;
declare const toWords: (num: 0 | 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3) => string;
declare const expData: {
    isString: typeof isString;
    toWords: (num: 0 | 1 | 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3) => string;
    ellipsis: (str: string, limit?: number, tail?: "]" | "~" | "!" | "@" | "#" | "$" | "%" | "^" | "&" | "*" | "(" | ")" | "_" | "+" | "{" | "}" | "|" | ":" | "<" | ">" | "?" | "-" | "=" | "[" | ";" | "'" | "," | "." | "/" | "\"" | "`" | " ", tailLength?: number) => string;
    striptags: typeof striptags;
};
export { isString, toWords, ellipsis, striptags };
export default expData;

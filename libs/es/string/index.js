/**
 * String module.
 * @module zaxString
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 */
import { isString } from '../types/index';
import striptags from 'striptags';
const SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', `"`, '`', ' '];
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
const ellipsis = (str, limit = 10, tail = '.', tailLength = 3) => {
    if (!str) {
        return '';
    }
    str = striptags(str);
    if (str.length <= limit) {
        return str;
    }
    return striptags(str).substr(0, limit) + tail.repeat(tailLength);
};
const toWords = (num) => {
    return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][num];
};
/* istanbul ignore next */
const expData = {
    isString,
    toWords,
    ellipsis,
    striptags
};
export { isString, toWords, ellipsis, striptags };
export default expData;
//# sourceMappingURL=index.js.map
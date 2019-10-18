/**
 * Cases module.
 * @module zaxCases
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/cases
 */
'use strict';
import { isString } from '../types';
/**
 * standard string of cleaning
 *
 * ```js
 * cleancase(" qq-ww_ee.rr ");
 * //=> 'qq-ww_ee.rr'
 * ```
 *
 * @param str {String} result of cleaing
 * @returns {String} result
 */
export function cleancase(str) {
    var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
    if (!isString(str)) {
        return '';
    }
    return str.trim().replace(re, '');
}
/**
 * PascalCase the characters in `string`.
 *
 * ```js
 * pascalcase("foo bar baz");
 * //=> 'FooBarBaz'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */
export function pascalcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    str = camelcase(str);
    return str[0].toUpperCase() + str.slice(1);
}
/**
 * camelCase the characters in `string`.
 *
 * ```js
 * camelcase("foo bar baz");
 * //=> 'fooBarBaz'
 * ```
 *
 * @param  {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */
export function camelcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[-_.\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, (_, ch) => {
        return ch.toUpperCase();
    });
}
/**
 * dash-case the characters in `string`. This is similar to [slugify],
 * but [slugify] makes the string compatible to be used as a URL slug.
 *
 * ```js
 * dashcase("a b.c d_e");
 * //=> 'a-b-c-d-e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @tags dasherize, dashify, hyphenate, case
 * @api public
 */
export function dashcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[-_.\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, function (_, ch) {
        return '-' + ch;
    });
}
/**
 * dot.case the characters in `string`.
 *
 * ```js
 * dotcase("a-b-c d_e");
 * //=> 'a.b.c.d.e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */
export function dotcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[-_.\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, function (_, ch) {
        return '.' + ch;
    });
}
/**
 * path/case the characters in `string`.
 *
 * ```js
 * pathcase("a-b-c d_e");
 * //=> 'a/b/c/d/e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */
export function pathcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[_.-\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, function (_, ch) {
        return '/' + ch;
    });
}
/**
 * Sentence-case the characters in `string`.
 *
 * ```js
 * sentencecase("foo bar baz.");
 * //=> 'Foo bar baz.'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */
export function sentencecase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * snake_case the characters in `string`.
 *
 * ```js
 * snakecase("a-b-c d_e");
 * //=> 'a_b_c_d_e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */
export function snakecase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[-_.\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, function (_, ch) {
        return '_' + ch;
    });
}
export default {
    cleancase,
    camelcase,
    pascalcase,
    snakecase,
    pathcase,
    sentencecase,
    dotcase,
    dashcase
};
//# sourceMappingURL=index.js.map
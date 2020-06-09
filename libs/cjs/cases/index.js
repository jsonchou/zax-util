/**
 * Cases module.
 * @module zaxCases
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/cases
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakecase = exports.sentencecase = exports.pathcase = exports.dotcase = exports.dashcase = exports.camelcase = exports.pascalcase = exports.cleancase = void 0;
var types_1 = require("../types");
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
function cleancase(str) {
    var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
    if (!types_1.isString(str)) {
        return '';
    }
    return str.trim().replace(re, '');
}
exports.cleancase = cleancase;
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
function pascalcase(str) {
    if (!types_1.isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    str = camelcase(str);
    return str[0].toUpperCase() + str.slice(1);
}
exports.pascalcase = pascalcase;
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
function camelcase(str) {
    if (!types_1.isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toLowerCase();
    }
    var re = /[-_.\W\s]+(\w|$)/g;
    return cleancase(str).replace(re, function (_, ch) {
        return ch.toUpperCase();
    });
}
exports.camelcase = camelcase;
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
function dashcase(str) {
    if (!types_1.isString(str)) {
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
exports.dashcase = dashcase;
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
function dotcase(str) {
    if (!types_1.isString(str)) {
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
exports.dotcase = dotcase;
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
function pathcase(str) {
    if (!types_1.isString(str)) {
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
exports.pathcase = pathcase;
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
function sentencecase(str) {
    if (!types_1.isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.sentencecase = sentencecase;
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
function snakecase(str) {
    if (!types_1.isString(str)) {
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
exports.snakecase = snakecase;
exports.default = {
    cleancase: cleancase,
    camelcase: camelcase,
    pascalcase: pascalcase,
    snakecase: snakecase,
    pathcase: pathcase,
    sentencecase: sentencecase,
    dotcase: dotcase,
    dashcase: dashcase
};
//# sourceMappingURL=index.js.map
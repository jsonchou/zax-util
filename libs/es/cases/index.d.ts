/**
 * Cases module.
 * @module zaxCases
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/cases
 */
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
export declare function cleancase(str: string): string;
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
export declare function pascalcase(str: string): string;
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
export declare function camelcase(str: string): string;
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
export declare function dashcase(str: string): string;
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
export declare function dotcase(str: string): string;
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
export declare function pathcase(str: string): string;
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
export declare function sentencecase(str: string): string;
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
export declare function snakecase(str: string): string;
declare const _default: {
    cleancase: typeof cleancase;
    camelcase: typeof camelcase;
    pascalcase: typeof pascalcase;
    snakecase: typeof snakecase;
    pathcase: typeof pathcase;
    sentencecase: typeof sentencecase;
    dotcase: typeof dotcase;
    dashcase: typeof dashcase;
};
export default _default;
//# sourceMappingURL=index.d.ts.map
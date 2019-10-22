/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */
import _regex from '../regex';
/**
 * checke string with regex
 *
 * ```js
 * matchRegex("d@d.d", "EMAIL" );
 * //=> true
 * ```
 *
 * @param v {String} target string
 * @param regexKey {String} regex
 */
export declare function matchRegex(v: string | number | Date, regexKey: keyof typeof _regex): boolean;
/**
 * isEmail
 *
 * ```js
 * isEmail("d@d.d");
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isEmail(v: string): boolean;
/**
 * isDate
 *
 * ```js
 * isDate(new Date());
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isDate(v: string | number | Date): boolean;
/**
 * isQQ
 *
 * ```js
 * isQQ(54645464);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isQQ(v: string | number): boolean;
/**
 * isTel
 *
 * ```js
 * isTel("027-87665432");
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isTel(v: string | number): boolean;
/**
 * isIdcard
 *
 * ```js
 * isIdcard(130324200106012652);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isIdcard(v: string | number): boolean;
/**
 * isMobile
 *
 * ```js
 * isMobile(13402938476);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isMobile(v: string | number): boolean;
/**
 * isPhone
 *
 * ```js
 * isPhone(13456575859);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
export declare function isPhone(v: string | number): boolean;
declare const _default: {
    matchRegex: typeof matchRegex;
    isDate: typeof isDate;
    isEmail: typeof isEmail;
    isIdcard: typeof isIdcard;
    isMobile: typeof isMobile;
    isPhone: typeof isPhone;
    isQQ: typeof isQQ;
    isTel: typeof isTel;
};
export default _default;
//# sourceMappingURL=index.d.ts.map
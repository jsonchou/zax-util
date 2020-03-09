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
 * @param v {String|Number|Date} target string
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
 * isMobile(13402938476)
 * //=> true
 *
 * isMobile('13402938476')
 * //=> true
 *
 * isMobile('8613402938476')
 * //=> true
 *
 * isMobile('+8613402938476')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
export declare function isMobile(v: string | number): boolean;
/**
 * isMobileChina
 *
 * ```js
 * isMobileChina('13402938476')
 * //=> true
 *
 * isMobileChina('8613402938476')
 * //=> true
 *
 * isMobileChina('+8613402938476')
 * //=> true
 *
 * isMobileChina('94856780')
 * //=> true
 *
 * isMobileChina('6643248')
 * //=> true
 *
 * isMobileChina('0922887075')
 * //=> true
 *
 * isMobileChina('+8860922887075')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
export declare function isMobileChina(v: string | number): boolean;
/**
 * isMobileHongKong
 *
 * ```js
 * isMobileHongKong(94856780)
 * //=> true
 *
 * isMobileHongKong('94856780')
 * //=> true
 *
 * isMobileHongKong('85294856780')
 * //=> true
 *
 * isMobileHongKong('+85294856780')
 * //=> true
 *
 * isMobileHongKong(64856780)
 * //=> true
 *
 * isMobileHongKong('64856780')
 * //=> true
 *
 * isMobileHongKong('85264856780')
 * //=> true
 *
 * isMobileHongKong('+85264856780')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
export declare function isMobileHongKong(v: string | number): boolean;
/**
 * isMobileMacau
 *
 * ```js
 * isMobileMacau(6643248)
 * //=> true
 *
 * isMobileMacau('6643248')
 * //=> true
 *
 * isMobileMacau('8536643248')
 * //=> true
 *
 * isMobileMacau('+8536643248')
 * //=> true
 *
 * isMobileMacau(6843248)
 * //=> true
 *
 * isMobileMacau('6843248')
 * //=> true
 *
 * isMobileMacau('8536843248')
 * //=> true
 *
 * isMobileMacau('+8536843248')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
export declare function isMobileMacau(v: string | number): boolean;
/**
 * isMobileTaiwan
 *
 * ```js
 * isMobileTaiwan(13402938476);
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
export declare function isMobileTaiwan(v: string | number): boolean;
declare const _default: {
    matchRegex: typeof matchRegex;
    isDate: typeof isDate;
    isEmail: typeof isEmail;
    isIdcard: typeof isIdcard;
    isMobile: typeof isMobile;
    isMobileChina: typeof isMobileChina;
    isMobileHongKong: typeof isMobileHongKong;
    isMobileMacau: typeof isMobileMacau;
    isMobileTaiwan: typeof isMobileTaiwan;
    isQQ: typeof isQQ;
    isTel: typeof isTel;
};
export default _default;

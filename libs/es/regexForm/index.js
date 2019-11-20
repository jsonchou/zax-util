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
export function matchRegex(v, regexKey) {
    v = String(v);
    let nv = v.replace(/\ /gi, '');
    let rex = _regex[regexKey];
    if (nv && nv.match(rex)) {
        return true;
    }
    return false;
}
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
export function isEmail(v) {
    return matchRegex(v, 'EMAIL');
}
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
export function isDate(v) {
    return matchRegex(v, 'DATE');
}
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
export function isQQ(v) {
    return matchRegex(v, 'QQ');
}
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
export function isTel(v) {
    return matchRegex(v, 'TEL');
}
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
export function isIdcard(v) {
    return matchRegex(v, 'IDCARD');
}
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
export function isMobile(v) {
    return matchRegex(v, 'MOBILE');
}
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
export function isPhone(v) {
    return isMobile(v);
}
export default {
    matchRegex,
    isDate,
    isEmail,
    isIdcard,
    isMobile,
    isPhone,
    isQQ,
    isTel
};
//# sourceMappingURL=index.js.map
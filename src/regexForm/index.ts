/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */

import _regex from '../regex'

type Nothing = {} // jsdoc2md bugs, do not remove this line

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
export function matchRegex(v: string | number | Date, regexKey: keyof typeof _regex): boolean {
	v = String(v)
	let nv = v.replace(/\ /gi, '')
	let rex = _regex[regexKey]
	if (nv && nv.match(rex)) {
		return true
	}
	return false
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
export function isEmail(v: string): boolean {
	return matchRegex(v, 'EMAIL')
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
export function isDate(v: string | number | Date): boolean {
	return matchRegex(v, 'DATE')
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
export function isQQ(v: string | number): boolean {
	return matchRegex(v, 'QQ')
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
export function isTel(v: string | number): boolean {
	return matchRegex(v, 'TEL')
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
export function isIdcard(v: string | number): boolean {
	return matchRegex(v, 'IDCARD')
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
export function isMobile(v: string | number): boolean {
	return matchRegex(v, 'MOBILE')
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
export function isPhone(v: string | number): boolean {
	return isMobile(v)
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
}

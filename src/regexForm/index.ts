/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */

import _regex from '../regex'

type Nothing = {} // jsdoc2md bugs, do not remove this line

/**
 * checke string with regex
 * @param v {String} target string
 * @param regexKey {String} regex
 */
export function matchRegex(v: string, regexKey: keyof typeof _regex): boolean {
	let nv = v.replace(/\ /gi, '')
	let rex = _regex[regexKey]
	if (nv && nv.match(rex)) {
		return true
	}
	return false
}

/**
 * isEmail
 * @param v {String} target string
 */
export function isEmail(v: string): boolean {
	return matchRegex(v, 'EMAIL')
}

/**
 * isDate
 * @param v {String} target string
 */
export function isDate(v: string): boolean {
	return matchRegex(v, 'DATE')
}

/**
 * isQQ
 * @param v {String} target string
 */
export function isQQ(v: string): boolean {
	return matchRegex(v, 'QQ')
}

/**
 * isTel
 * @param v {String} target string
 */
export function isTel(v: string): boolean {
	return matchRegex(v, 'TEL')
}

/**
 * isIdcard
 * @param v {String} target string
 */
export function isIdcard(v: string): boolean {
	return matchRegex(v, 'IDCARD')
}

/**
 * isMobile
 * @param v {String} target string
 */
export function isMobile(v: string): boolean {
	return matchRegex(v, 'MOBILE')
}

/**
 * isPhone
 * @param v {String} target string
 */
export function isPhone(v: string): boolean {
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

/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */

import _regex from '../regex'

export function matchRegex(v: string, regexKey: keyof typeof _regex): boolean {
	let nv = v.replace(/\ /gi, '')
	let rex = _regex[regexKey]
	if (nv && nv.match(rex)) {
		return true
	}
	return false
}

export function isEmail(v: string): boolean {
	return matchRegex(v, 'EMAIL')
}
export function isDate(v: string): boolean {
	return matchRegex(v, 'DATE')
}
export function isQQ(v: string): boolean {
	return matchRegex(v, 'QQ')
}
export function isTel(v: string): boolean {
	return matchRegex(v, 'TEL')
}
export function isIdcard(v: string): boolean {
	return matchRegex(v, 'IDCARD')
}
export function isMobile(v: string): boolean {
	return matchRegex(v, 'MOBILE')
}
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

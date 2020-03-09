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
 * @param v {String|Number|Date} target string
 * @param regexKey {String} regex
 */
export function matchRegex(v: string | number | Date, regexKey: keyof typeof _regex): boolean {
	v = String(v)
	let nv = v.replace(/\ /gi, '')
	let rex = _regex[regexKey] as RegExp
	if (nv && rex.test(nv)) {
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
export function isMobile(v: string | number): boolean {
	return matchRegex(v, 'MOBILE')
}

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
export function isMobileChina(v: string | number): boolean {
	return isMobile(v) || isMobileHongKong(v) || isMobileMacau(v) || isMobileTaiwan(v)
}

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
export function isMobileHongKong(v: string | number): boolean {
	return matchRegex(v, 'MOBILE_HONGKONG')
}


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
export function isMobileMacau(v: string | number): boolean {
	return matchRegex(v, 'MOBILE_MACAU')
}


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
export function isMobileTaiwan(v: string | number): boolean {
	return matchRegex(v, 'MOBILE_TAIWAN')
}


export default {
	matchRegex,
	isDate,
	isEmail,
	isIdcard,
	isMobile,
	isMobileChina,
	isMobileHongKong,
	isMobileMacau,
	isMobileTaiwan,
	isQQ,
	isTel
}

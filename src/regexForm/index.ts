import _regex from '../regex'

export function matchRegex(v: string, regexKey: keyof typeof _regex): boolean {
	let nv = v.replace(/\ /gi, '')
	if (nv && nv.match(_regex[regexKey])) {
		return true
	}
	return false
}

export function isEmail(v: string): boolean {
	return matchRegex(v, 'email')
}
export function isDate(v: string): boolean {
	return matchRegex(v, 'date')
}
export function isQQ(v: string): boolean {
	return matchRegex(v, 'qq')
}
export function isTel(v: string): boolean {
	return matchRegex(v, 'tel')
}
export function isIdcard(v: string): boolean {
	return matchRegex(v, 'idcard')
}
export function isMobile(v: string): boolean {
	return matchRegex(v, 'mobile')
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

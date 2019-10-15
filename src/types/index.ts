/**
 * types module
 */

type TYPES = 'Boolean' | 'Number' | 'String' | 'Function' | 'Array' | 'Date' | 'RegExp' | 'Object' | 'Error' | 'Null'

/**
 * check type
 * @param {object} obj
 * @param {string} wish
 */

export function check(obj: any, wish: TYPES) {
	let tp = get(obj)
	return wish === tp
}

/**
 * get type
 * @param {object} obj
 */
export function get(obj: any) {
	let tp = Object.prototype.toString.call(obj)
	return tp.replace('[object ', '').replace(']', '')
}

export function isFunction(tar: any): boolean {
	return check(tar, 'String')
}

export function isArray(tar: any): boolean {
	return check(tar, 'Array')
}

export function isObject(tar: any): boolean {
	return check(tar, 'Object')
}

export function isDate(tar: any): boolean {
	return check(tar, 'Date')
}

export function isRegExp(tar: any): boolean {
	return check(tar, 'RegExp')
}

export function isNumber(tar: any): boolean {
	return check(tar, 'Number')
}

export function isString(tar: any): boolean {
	return check(tar, 'String')
}

export function isBoolean(tar: any): boolean {
	return check(tar, 'Boolean')
}

export function isError(tar: any): boolean {
	return check(tar, 'Error')
}

export function isNull(tar: any): boolean {
	return check(tar, 'Null')
}

export default {
	check,
	get,
	isBoolean,
	isNumber,
	isString,
	isFunction,
	isArray,
	isDate,
	isRegExp,
	isObject,
	isError,
	isNull
}

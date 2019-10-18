/**
 * Types module.
 * @module zaxTypes
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/types
 */

/** @type {TYPES} */
export type TYPES = 'Boolean' | 'Number' | 'String' | 'Function' | 'Array' | 'Date' | 'RegExp' | 'Object' | 'Error' | 'Null'

/**
 * check type
 * @param {any} tar - target
 * @param {string} wish - wish type
 */

export function check(tar: any, wish: TYPES) {
	let tp = get(tar)
	return wish === tp
}

/**
 * get type
 * @param {any} tar - target
 * @returns {string} - type target result
 */
export function get(tar: any): TYPES {
	let tp = Object.prototype.toString.call(tar)
	let res = tp.replace('[object ', '').replace(']', '') as TYPES
	return res
}

/**
 * isFunction
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isFunction(tar: any): boolean {
	return check(tar, 'String')
}

/**
 * isArray
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isArray(tar: any): boolean {
	return check(tar, 'Array')
}

/**
 * isObject
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isObject(tar: any): boolean {
	return check(tar, 'Object')
}

/**
 * isDate
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isDate(tar: any): boolean {
	return check(tar, 'Date')
}

/**
 * isRegExp
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isRegExp(tar: any): boolean {
	return check(tar, 'RegExp')
}

/**
 * isNumber
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isNumber(tar: any): boolean {
	return check(tar, 'Number')
}

/**
 * isString
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isString(tar: any): boolean {
	return check(tar, 'String')
}

/**
 * isFunction
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isBoolean(tar: any): boolean {
	return check(tar, 'Boolean')
}

/**
 * isError
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isError(tar: any): boolean {
	return check(tar, 'Error')
}

/**
 * isNull
 * @param {any} tar - target
 * @returns {bool} - type target result
 */
export function isNull(tar: any): boolean {
	return check(tar, 'Null')
}

/**
 * export all type modules
 */
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

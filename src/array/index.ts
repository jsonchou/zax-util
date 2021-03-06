/**
 * Array module.
 * @module zaxArray
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/array
 * @see partial from https://github.com/jonschlinkert/arr-diff
 */

import { isArray, isNumber, isString, isObject } from '../types/index'

export type TypeObject = { [key: string]: any }
export type TypeArray = Array<number | string>
export type TypeParam = string | number
export type ObjectArray = TypeObject[]
export type MixArray = TypeArray | ObjectArray

export type TypeOrderBy = 'ASC' | 'DESC'

/**
 * sort array.
 *
 * ```js
 * sort([{ id: 2 }, { id: 3 }, { id: 1 }], 'ASC', 'id'))
 * //=> [{id:1},{id:2},{id:3}]
 * ```
 *
 * @param arr {MixArray}
 * @param orderBy {TypeOrderBy}
 * @param key {String}
 * @readonly {MixArray | void}
 */
export function sort(arr: MixArray, orderBy: TypeOrderBy = 'ASC', key?: string): MixArray | never {
	if (!arr.length) {
		throw new RangeError('Invalid array length')
	}
	let func
	if (!key) {
		if (orderBy === 'ASC') {
			func = (a: any, b: any) => (a > b ? 1 : -1)
		} else {
			func = (a: any, b: any) => (a > b ? -1 : 1)
		}
	} else {
		if (orderBy === 'ASC') {
			func = (a: any, b: any) => (a[key] > b[key] ? 1 : -1)
		} else {
			func = (a: any, b: any) => (a[key] > b[key] ? -1 : 1)
		}
	}
	return arr.sort(func)
}

/**
 * unique array.
 *
 * ```js
 * unique(['a','c','d','a']);
 * //=> ['a','b','c']
 * ```
 *
 * @param arr {MixArray}
 * @param key
 * @readonly {MixArray | never}
 */

export function unique(arr: MixArray, key: string = 'id'): MixArray | never {
	if (!arr.length) {
		throw new RangeError('Invalid array length')
	}
	let first = arr[0]

	/* istanbul ignore next */
	if (typeof first === 'string') {
		let tmp = new Set<string>(arr as string[])
		return [...Array.from(tmp)]
	} else if (typeof first === 'number') {
		let tmp = new Set<number>(arr as number[])
		return [...Array.from(tmp)]
	} else if (isObject(first)) {
		let map = new Map<string | number, boolean>()
		let tmp: TypeObject[] = []
		for (let item of arr as ObjectArray) {
			if (!map.has(item[key])) {
				map.set(item[key], true)
				tmp.push(item)
			}
		}
		return [...Array.from(tmp)]
	}
	throw new TypeError('Not correct type')
}

/**
 * diff the first array of simple.
 *
 * ```js
 * diff(['a', 'b', 'c'], ['a'], ['b'], ['g'])
 * //=> ['c']
 * ```
 *
 * @param arr {TypeArray[]}
 * @returns {TypeArray}
 */

export function diff(...arr: TypeArray[]): TypeArray {
	let diffArray = (one: any[], two: any[]): any[] => {
		/* istanbul ignore next */
		if (!Array.isArray(two)) {
			return one.slice()
		}

		let tlen = two.length
		let olen = one.length
		let idx = -1
		let arr = []

		while (++idx < olen) {
			let ele = one[idx]

			let hasEle = false
			for (let i = 0; i < tlen; i++) {
				let val = two[i]

				if (ele === val) {
					hasEle = true
					break
				}
			}

			if (hasEle === false) {
				arr.push(ele)
			}
		}
		return arr
	}

	let len = arr.length
	let idx = 0
	let first = arr[0]
	while (++idx < len) {
		first = diffArray(first, arr[idx])
	}
	return first
}

/**
 * intersect array.
 *
 * ```js
 * intersect([1,2,3,4,5], [2,4,6,8,10])
 * //=> [2,4] //交集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export function intersect<T extends TypeParam>(a: Array<T>, b: Array<T>): Array<T> {
	let sa = new Set(a)
	let sb = new Set(b)
	return a.filter(x => sb.has(x))
}

/**
 * minus array.
 *
 * ```js
 * minus([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,3,5] //差集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export function minus<T extends TypeParam>(a: Array<T>, b: Array<T>): Array<T> {
	let sa = new Set(a)
	let sb = new Set(b)
	return a.filter(x => !sb.has(x))
}

/**
 * complement array.
 *
 * ```js
 * complement([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,3,5,6,8,10] //补集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export function complement<T extends TypeParam>(a: Array<T>, b: Array<T>): Array<T> {
	let sa = new Set(a)
	let sb = new Set(b)
	return [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))]
}

/**
 * union array.
 *
 * ```js
 * union([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,2,3,4,5,6,8,10] //交集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export function union<T extends TypeParam>(a: Array<T>, b: Array<T>): Array<T> {
	return Array.from(new Set([...a, ...b]))
}

/**
 * union the array of simple with high performane.
 *
 * ```js
 * unionPro(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
 * //=> ['a', 'b', 'c', 'd', 'e', 'f']
 * ```
 *
 * @param arr {TypeArray[]}
 * @returns {TypeArray}
 */

export function unionPro(...arr: TypeArray[]): TypeArray {
	var len = arr.length
	var i = 0
	var first = arr[0]

	while (++i < len) {
		var arg = arr[i]
		/* istanbul ignore next */
		if (!arg) continue

		/* istanbul ignore next */
		if (!Array.isArray(arg)) {
			arg = [arg]
		}

		for (var j = 0; j < arg.length; j++) {
			var ele = arg[j] as string & number
			if (first.includes(ele)) continue
			first.push(ele)
		}
	}
	return first
}

export default {
	/* istanbul ignore next */
	isArray,
	sort,
	unique,
	diff,
	intersect,
	minus,
	complement,
	union,
	unionPro,
}

/**
 * array module
 * partial from https://github.com/jonschlinkert/arr-diff
 */
import { isArray, isNumber, isString, isObject } from '../types/index'

type TypeObject = { [key: string]: any }
type TypeArray = string[] | number[]
type ObjectArray = TypeObject[]
type MixArray = TypeArray | ObjectArray

export type TypeOrderBy = 'ASC' | 'DESC'

/**
 * sort the array.
 *
 * ```js
 * sort([{id:2},{id:3},{id:1}], "ASC", "id");
 * //=> [{id:1},{id:2},{id:3}]
 * ```
 *
 * @param arr
 * @param orderBy
 * @param key
 */
export function sort(arr: MixArray, orderBy: TypeOrderBy = 'ASC', key?: string): MixArray | void {
	if (!arr.length) {
		console.error('arr is null')
		return
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
 * @param arr
 * @param key
 */

export function unique(arr: MixArray, key = 'id'): MixArray | void {
	if (!arr.length) {
		console.error('arr is null')
		return
	}
	let first = arr[0]
	let tmp: any

	if (typeof first === 'string') {
		tmp = new Set(arr as (string[]))
	} else if (typeof first === 'number') {
		tmp = new Set(arr as (number[]))
	} else if (isObject(first)) {
		tmp = []
		let map = new Map()
		for (let item of arr as ObjectArray) {
			if (!map.has(item[key])) {
				map.set(item[key], true)
				tmp.push({
					id: item.id,
					name: item.name
				})
			}
		}
	}
	return [...tmp]
}

/**
 * union the array of simple.
 *
 * ```js
 * union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
 * //=> ['a', 'b', 'c', 'd', 'e', 'f']
 * ```
 *
 * @param arr
 */

export function union(...arr: TypeArray[]): TypeArray {
	var len = arr.length
	var i = 0
	var first = arr[0]

	while (++i < len) {
		var arg = arr[i]
		if (!arg) continue

		if (!Array.isArray(arg)) {
			arg = [arg]
		}

		for (var j = 0; j < arg.length; j++) {
			var ele = arg[j] as (string & number)
			if (first.includes(ele)) continue
			first.push(ele)
		}
	}
	return first
}

/**
 * diff the first array of simple.
 *
 * ```js
 * diff(['a', 'b', 'c'], ['a'], ['b'],['g'])
 * //=> ['c']
 * ```
 *
 * @param arr
 */

export function diff(...arr: TypeArray[]): TypeArray {
	let diffArray = (one: any[], two: any[]): any[] => {
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

export default {
	/* istanbul ignore next */
	isArray,
	sort,
	unique,
	union,
	diff
}

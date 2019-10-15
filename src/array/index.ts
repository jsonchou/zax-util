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
 * sortBy([{id:2},{id:3},{id:1}], "ASC", "id");
 * //=> [{id:1},{id:2},{id:3}]
 * ```
 *
 * @name .sortBy
 * @param  {Array} `array`
 * @return {Array}
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
 * unique the array.
 *
 * ```js
 * unique(['a','c','d','a']);
 * //=> ['a','b','c']
 * ```
 *
 * @name .sort
 * @param  {Array} `array`
 * @return {Array}
 */
export function unique(arr: MixArray, key: 'id'): MixArray | void {
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
		if (!key) {
			console.log('you lost a param named key')
			return
		}
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

export default {
	isArray,
	sort,
	unique
}

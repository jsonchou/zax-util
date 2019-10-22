/**
 * String module.
 * @module zaxString
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 */

import { isString } from '../types/index'
import striptags from 'striptags'

type Nothing = {} // jsdoc2md bugs, do not remove this line

const SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', `"`, '`', ' '] as const
export type SpecialCharType = typeof SpecialChar[number]

/**
 * ellipsis string.
 *
 * ```js
 * ellipsis("qwertyuiop", 5, '*', 3);
 * //=> qwert***
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param tail {SpecialCharType} tail
 * @param tailLength {Number} tail length
 * @readonly {MixArray | void}
 */

const ellipsis = (str: string, limit: number = 10, tail: SpecialCharType = '.', tailLength: number = 3): string => {
	if (!str) {
		return ''
	}
	str = striptags(str)
	if (str.length <= limit) {
		return str
	}
	return striptags(str).substr(0, limit) + tail.repeat(tailLength)
}

const toWords = (num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => {
	return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][num]
}

/* istanbul ignore next */
const expData = {
	isString,
	toWords,
	ellipsis,
	striptags
}

export { isString, toWords, ellipsis, striptags }

export default expData

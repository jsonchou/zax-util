/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */

import { isString } from '../types/index'
const striptags = require('striptags')

type Nothing = {} // jsdoc2md bugs, do not remove this line

const SpecialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '-', '=', '[', ']', ';', "'", ',', '.', '/', `"`, '`', ' '] as const
type SpecialCharType = typeof SpecialChar[number]

const numbers = {
	'zh-cn': ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
	'en-us': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
}

const days = {
	'zh-cn': ['日', '一', '二', '三', '四', '五', '六'],
	'en-us': ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
}

const months = {
	'zh-cn': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
	'en-us': ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
}

function charEscape(str: string): string {
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

type NumberKeys = keyof typeof numbers
type daysKeys = keyof typeof days
type MonthKeys = keyof typeof months

type Nothing0 = {}

/**
 * Convert object to kindof querystring.
 * 0 - 10
 *
 * @example
 * ```js
 * queryString({ k: 1, v: false, b: true, d: '', x: undefined, p: undefined })
 * //=> k=1&v=false&b=true
 * ```
 *
 * @param obj {Object} object
 * @returns {String} string
 */

const queryString = (obj: Record<string, string | number | boolean | undefined>, option?: Partial<{ joinWith: string, perfectResult: boolean }>): string => {
	if (!option) {
		option = {}
	}
	let opt = Object.assign({ joinWith: '&', perfectResult: true }, { ...option })
	let arr = Object.keys(obj).reduce((sum: Array<string>, item) => {
		let val = obj[item]
		if (opt.perfectResult) {
			if (val || val === false) {
				sum.push(`${item}=${val}`)
			}
		} else {
			sum.push(`${item}=${val}`)
		}
		return sum
	}, [])
	if (arr && arr.length) {
		return arr.join(opt.joinWith)
	}
	return ''
}

type Nothing30 = {}

/**
 * Convert object to kindof querystring.
 * 0 - 10
 *
 * @example
 * ```js
 * parseString("k=1&v=false&b=true&d=&x=undefined&p=undefined")
 * //=> { k: 1, v: false, b: true }
 * ```
 *
 * @param str {String} string
 * @returns {String} string
 */

const parseString = (str: string, option?: Partial<{ joinWith: string, perfectResult: boolean }>): Record<string, string | number | boolean> => {
	if (!option) {
		option = {}
	}
	let opt = Object.assign({ joinWith: '&', perfectResult: true }, { ...option })
	let obj = str.split(opt.joinWith).reduce((sum: Record<string, string | number | boolean>, item) => {
		let [first, second] = item.split('=')
		if (!opt.perfectResult) {
			// dirty control
			sum[first] = second
		} else {
			if (second && second !== 'undefined') {
				if (second === 'true' || second === 'false') {
					second = (second === 'true' ? true : false) as any
				} else {
					// fix correct number
					try {
						/* istanbul ignore next */
						if (!isNaN(second as unknown as number)) {
							// 是数字
							second = Number(second) as any
						}
					} catch (err) {
						/* istanbul ignore next */
						console.log('parseString err', err)
					}
				}
				sum[first] = second
			}
		}
		return sum
	}, {})
	return obj
}



type Nothing1 = {}

/**
 * Number to english word.
 * 0 - 10
 *
 * @example
 * ```js
 * toWord(1)
 * //=> one
 * ```
 *
 * @param num {Number} number
 * @param locale {NumberKeys} locale
 * @returns {String} locale of number
 */

const toWord = (num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, locale: NumberKeys = 'en-us'): string => {
	return numbers[locale][num]
}

type Nothing2 = {}
/**
 * number to day.
 * Sunday - Saturday : 0 - 6
 *
 * @example
 * ```js
 * toDay(0)
 * //=> 日
 * ```
 *
 * @param num {Number} number
 * @param locale {daysKeys} locale
 * @returns {String} day of number
 */

const toDay = (num: 0 | 1 | 2 | 3 | 4 | 5 | 6, locale: daysKeys = 'zh-cn'): string => {
	return days[locale][num]
}

type Nothing3 = {}

/**
 * number to month.
 * Jan - Dec : 1 - 12
 *
 * @example
 * ```js
 * toMonth(12)
 * //=> 十二
 * ```
 *
 * @param num {Number} number
 * @param locale {MonthKeys} locale
 * @returns {String} day of month
 */

const toMonth = (num: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, locale: MonthKeys = 'zh-cn'): string => {
	return months[locale][num - 1]
}

type Nothing4 = {}
/**
 * cut & ellipsis string.
 *
 * @example
 * ```js
 * ellipsis("qwertyuiop", 5, '*', 3)
 * //=> qwert***
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param tail {SpecialCharType} tail
 * @param tailRepeatTime {Number} tail repeat times
 * @returns {String} string of result
 */

const ellipsis = (str: string, limit: number = 10, tail: SpecialCharType = '.', tailRepeatTime: number = 3): string => {
	if (!str) {
		return ''
	}
	str = striptags(str)
	if (str.length <= limit) {
		return str
	}
	return striptags(str).substr(0, limit) + tail.repeat(tailRepeatTime)
}

type Nothing5 = {}
/**
 * left pad with char.
 *
 * @example
 * ```js
 * padStart(5,2)
 * //=> 05
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const padStart = (str: string | number, limit = 2, repeatWith = '0'): string => {
	str = String(str)
	let strLen = str.length
	if (strLen < limit) {
		return repeatWith.repeat(limit - strLen) + str
	}
	return str
}

type Nothing6 = {}
/**
 * right pad with char.
 *
 * @example
 * ```js
 * padEnd(5,2)
 * //=> 50
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */
const padEnd = (str: string | number, limit = 2, repeatWith = '0'): string => {
	str = String(str)
	let strLen = str.length
	if (strLen < limit) {
		return str + repeatWith.repeat(limit - strLen)
	}
	return str
}

type Nothing7 = {}
/**
 * trim first & last letter.
 *
 * @example
 * ```js
 * trim('/pages/index/','/')
 * //=> pages/index
 * ```
 *
 * @param str {String} target
 * @param tarChar {String} target of replace string
 * @param replaceWith {String} replace with
 * @returns {String} string of result
 */
const trim = (str: string | number, tarChar = ' ', replaceWith = ''): string => {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
	str = String(str).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
	if (!tarChar) {
		tarChar = ' '
	}
	if (!replaceWith) {
		replaceWith = ''
	}
	// fix with special quote
	tarChar = charEscape(tarChar)
	let rex = new RegExp(`^${tarChar}|${tarChar}$`, 'g')
	return str.replace(rex, replaceWith)
}

type Nothing8 = {}
/**
 * trim start.
 *
 * @example
 * ```js
 * trimStart('/pages/index/','/')
 * //=> pages/index/
 * ```
 *
 * @param str {String} target
 * @param tarChar {String} target of replace string
 * @param replaceWith {String} replace with
 * @returns {String} string of result
 */
const trimStart = (str: string | number, tarChar = ' ', replaceWith = ''): string => {
	str = trim(String(str))
	if (!tarChar) {
		tarChar = ' '
	}
	if (!replaceWith) {
		replaceWith = ''
	}
	tarChar = charEscape(tarChar)
	let rex = new RegExp(`^${tarChar}`, 'g')
	return str.replace(rex, replaceWith)
}

type Nothing9 = {}
/**
 * trim end.
 *
 * @example
 * ```js
 * trimEnd('/pages/index/','/')
 * //=> /pages/index
 * ```
 *
 * @param str {String} target
 * @param tarChar {String} target of replace string
 * @param replaceWith {String} replace with
 * @returns {String} string of result
 */
const trimEnd = (str: string | number, tarChar = ' ', replaceWith = ''): string => {
	str = trim(String(str))
	if (!tarChar) {
		tarChar = ' '
	}
	if (!replaceWith) {
		replaceWith = ''
	}
	tarChar = charEscape(tarChar)
	let rex = new RegExp(`${tarChar}$`, 'g')
	return str.replace(rex, replaceWith)
}

/* istanbul ignore next */
const expData = {
	queryString,
	parseString,
	toWord,
	toDay,
	toMonth,
	ellipsis,
	striptags,
	padStart,
	padEnd,
	trim,
	trimStart,
	trimEnd,
	isString
}

export { SpecialCharType, NumberKeys, daysKeys, MonthKeys, queryString, parseString, toWord, toDay, toMonth, ellipsis, striptags, padStart, padEnd, trim, trimStart, trimEnd, isString }

export default expData

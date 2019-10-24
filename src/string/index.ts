/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
 */

import { isString } from '../types/index'
import striptags from 'striptags'

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

type NumberKeys = keyof typeof numbers
type daysKeys = keyof typeof days
type MonthKeys = keyof typeof months

type Nothing1 = {}

/**
 * number to english word.
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
 * lpad(5)
 * //=> 05
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */

const lpad = (str: string | number, limit: 2, repeatWith: '0'): string => {
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
 * rpad(5)
 * //=> 50
 * ```
 *
 * @param str {String} target
 * @param limit {Number} limit
 * @param repeatWith {String} repeatWith
 * @returns {String} string of result
 */

const rpad = (str: string | number, limit: 2, repeatWith: '0'): string => {
	str = String(str)
	let strLen = str.length
	if (strLen < limit) {
		return str + repeatWith.repeat(limit - strLen)
	}
	return str
}

/* istanbul ignore next */
const expData = {
	toWord,
	toDay,
	toMonth,
	ellipsis,
	striptags,
	lpad,
	rpad,
	isString
}

export { SpecialCharType, NumberKeys, daysKeys, MonthKeys, toWord, toDay, toMonth, ellipsis, striptags, lpad, rpad, isString }

export default expData

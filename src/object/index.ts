/**
 * Object module.
 * @module zaxObject
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/object
 */

import { isObject } from '../types/index'

type Nothing = {} // jsdoc2md bugs, do not remove this line

/**
 * has diff between objects.
 *
 * @example
 * ```js
 * hasDiff({ k: 1, v: 3 }, { k: 1, v: 3 })
 * //=> false
 * ```
 *
 * @see https://github.com/tkh44/shallow-compare/blob/master/src/index.js
 * @param a {Object} target a
 * @param b {Object} target b
 * @returns {Boolean} result
 */

const hasDiff = (a: Record<string, any>, b: Record<string, any>): boolean => {
	if (Array.isArray(a) || Array.isArray(b)) {
		throw new TypeError('diff object must be object type!')
	}
	for (let i in a) if (!(i in b)) return true
	for (let i in b) if (a[i] !== b[i]) return true
	return false
}

type Nothing2 = {}

/* istanbul ignore next */

/**
 * shallow compare react props & states.
 *
 * @example
 * ```js
 * shallowCompare(this,this.props,nextProps)
 * //=> 日
 * ```
 *
 * @see https://github.com/tkh44/shallow-compare/blob/master/src/index.js
 * @param num {Number} number
 * @param locale {daysKeys} locale
 * @returns {String} day of number
 */

const shallowCompare = (instance: any, nextProps: Record<string, any>, nextState: Record<string, any>): boolean => {
	return hasDiff(instance.props, nextProps) || hasDiff(instance.state, nextState)
}

/* istanbul ignore next */
export default {
	isObject,
	hasDiff,
	shallowCompare
}

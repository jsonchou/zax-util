/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */

import { isFunction, isObject, isArray } from '../types/index'
import { isEmptyObject } from '../object/index'

type Nothing = {} // jsdoc2md bugs, do not remove this line

/**
 * wait function loaded
 * @param tar { Object } target object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(tar: any, ticker: number = 30, expiredTime: number = 3000): Promise<boolean> {
	return new Promise((resolve, reject) => {

		let timer: any
		/* istanbul ignore next */
		let unitFunc = () => {
			if (tar && isArray(tar) && tar.length) {
				timer && clearInterval(timer)
				resolve(true)
			} else if (tar && isObject(tar) && !isEmptyObject(tar)) {
				timer && clearInterval(timer)
				resolve(true)
			} else if (tar && tar !== '' && tar !== null && tar !== undefined) {
				timer && clearInterval(timer)
				resolve(true)
			} else {
				reject(false)
				return
			}
		}

		timer = setInterval(() => {
			/* istanbul ignore next */
			unitFunc()
		}, ticker)

		/* istanbul ignore next */
		setTimeout(() => {
			timer && clearInterval(timer)
			resolve(true)
		}, expiredTime)
	})
}

/**
 * wait some time and excute the next func
 * @param time {Number} sleep time
 */
export function sleep(time: number = 200): Promise<boolean> {
	return new Promise(resolve => {
		/* istanbul ignore next */
		setTimeout(() => {
			resolve(true)
		}, time)
	})
}

export default {
	/* istanbul ignore next */
	isFunction,
	wait,
	sleep
}

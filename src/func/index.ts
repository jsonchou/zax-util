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
 * @param parentObj { Object } target object
 * @param key { String } key of object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(parentObj: any, ticker: number = 30, expiredTime: number = 3000): Promise<boolean> {
	return new Promise((resolve, reject) => {

		let timer: any
		/* istanbul ignore next */

		let unitFunc = () => {
			if (parentObj && isArray(parentObj) && parentObj.length) {
				timer && clearInterval(timer)
				resolve(true)
			} else if (parentObj && isObject(parentObj) && !isEmptyObject(parentObj)) {
				timer && clearInterval(timer)
				resolve(true)
			} else {
				console.error('please input a correct object or array')
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

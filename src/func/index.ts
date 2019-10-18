/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */

import { isFunction } from '../types/index'

type Nothing = {} // jsdoc2md bugs, do not remove this line

/**
 * wait function loaded
 * @param parentObj { Object } target object
 * @param key { String } key of object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(parentObj: object, key: string, ticker = 30, expiredTime = 3000): Promise<boolean> {
	return new Promise(resolve => {
		let timer: any
		if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
			timer && window.clearInterval(timer)
			resolve(true)
		} else {
			timer = window.setInterval(() => {
				if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
					timer && window.clearInterval(timer)
					resolve(true)
				}
			}, ticker)
		}
		window.setTimeout(() => {
			timer && window.clearInterval(timer)
			resolve(true)
		}, expiredTime)
	})
}

/**
 * wait some time and excute the next func
 * @param time {Number} sleep time
 */
export function sleep(time = 200): Promise<boolean> {
	return new Promise(resolve => {
		window.setTimeout(() => {
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

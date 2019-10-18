/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */

import { isFunction, isObject } from '../types/index'
import { resolve } from 'path'

type Nothing = {} // jsdoc2md bugs, do not remove this line

/**
 * wait function loaded
 * @param parentObj { Object } target object
 * @param key { String } key of object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(parentObj: object, key: string, ticker: number = 30, expiredTime: number = 3000): Promise<boolean> {
	return new Promise((resolve, reject) => {
		/* istanbul ignore next */
		if (!isObject(parentObj)) {
			console.error('please input a correct object')
			reject(false)
			return
		}
		/* istanbul ignore next */
		if (!key) {
			console.error('please input a correct key')
			resolve(false)
			return
		}

		let timer: any
		/* istanbul ignore next */
		if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
			timer && window.clearInterval(timer)
			resolve(true)
		} else {
			/* istanbul ignore next */
			timer = window.setInterval(() => {
				if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
					timer && window.clearInterval(timer)
					resolve(true)
				}
			}, ticker)
		}
		/* istanbul ignore next */
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
export function sleep(time: number = 200): Promise<boolean> {
	return new Promise(resolve => {
		/* istanbul ignore next */
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

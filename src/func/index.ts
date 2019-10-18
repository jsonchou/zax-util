/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */

 import { isFunction } from '../types/index'

export function lazy(parentObj: object, key: string, ticker = 30, expiredTime = 3000) {
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

export function sleep(time = 200) {
	return new Promise(resolve => {
		window.setTimeout(() => {
			resolve(true)
		}, time)
	})
}

export default {
	/* istanbul ignore next */
	isFunction,
	lazy,
	sleep
}

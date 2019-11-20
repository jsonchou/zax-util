/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */
import { isFunction, isObject } from '../types/index';
/**
 * wait function loaded
 * @param parentObj { Object } target object
 * @param key { String } key of object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(parentObj, key, ticker = 30, expiredTime = 3000) {
    return new Promise((resolve, reject) => {
        /* istanbul ignore next */
        if (!isObject(parentObj)) {
            console.error('please input a correct object');
            reject(false);
            return;
        }
        /* istanbul ignore next */
        if (!key) {
            console.error('please input a correct key');
            resolve(false);
            return;
        }
        let timer;
        /* istanbul ignore next */
        if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
            timer && clearInterval(timer);
            resolve(true);
        }
        else {
            /* istanbul ignore next */
            timer = setInterval(() => {
                if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
                    timer && clearInterval(timer);
                    resolve(true);
                }
            }, ticker);
        }
        /* istanbul ignore next */
        setTimeout(() => {
            timer && clearInterval(timer);
            resolve(true);
        }, expiredTime);
    });
}
/**
 * wait some time and excute the next func
 * @param time {Number} sleep time
 */
export function sleep(time = 200) {
    return new Promise(resolve => {
        /* istanbul ignore next */
        setTimeout(() => {
            resolve(true);
        }, time);
    });
}
export default {
    /* istanbul ignore next */
    isFunction,
    wait,
    sleep
};
//# sourceMappingURL=index.js.map
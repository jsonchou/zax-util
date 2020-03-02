/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */
import { isFunction, isObject, isArray, isDate, isString } from '../types/index';
import { isEmptyObject } from '../object/index';
/**
 * wait function loaded
 * @param tar { Object } target object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export function wait(tar, ticker = 30, expiredTime = 3000) {
    return new Promise((resolve, reject) => {
        let timer;
        /* istanbul ignore next */
        let unitFunc = () => {
            if (tar && isArray(tar) && tar.length) {
                timer && clearInterval(timer);
                resolve(true);
            }
            else if (tar && isObject(tar) && !isEmptyObject(tar)) {
                timer && clearInterval(timer);
                resolve(true);
            }
            else if (tar !== '' && tar !== null && tar !== undefined) {
                if (isString(tar) || isDate(tar)) {
                    timer && clearInterval(timer);
                    resolve(true);
                }
            }
        };
        timer = setInterval(() => {
            /* istanbul ignore next */
            unitFunc();
        }, ticker);
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
/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */
import { isFunction } from '../types/index';
/**
 * wait function loaded
 * @param tar { Object } target object
 * @param ticker { Number } ticker of setInterval
 * @param expiredTime { Number } expired time
 * @returns {Promise}
 */
export declare function wait(tar: any, ticker?: number, expiredTime?: number): Promise<boolean>;
/**
 * wait some time and excute the next func
 * @param time {Number} sleep time
 */
export declare function sleep(time?: number): Promise<boolean>;
declare const _default: {
    isFunction: typeof isFunction;
    wait: typeof wait;
    sleep: typeof sleep;
};
export default _default;

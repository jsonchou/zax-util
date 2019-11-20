/**
 * Object module.
 * @module zaxObject
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/object
 */
import { isObject } from '../types/index';
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
declare const hasDiff: (a: Record<string, any>, b: Record<string, any>) => boolean;
/**
 * shallow compare react props & states.
 *
 * @example
 * ```js
 * shallowCompare(this,this.props,nextProps)
 * //=> true
 * ```
 *
 * @see https://github.com/tkh44/shallow-compare/blob/master/src/index.js
 * @param instance {Object} react this
 * @param nextProps {Object} nextProps
 * @param nextState {Object} nextState
 * @returns {Boolean} result
 */
declare const shallowCompare: (instance: any, nextProps: Record<string, any>, nextState: Record<string, any>) => boolean;
declare const expData: {
    hasDiff: (a: Record<string, any>, b: Record<string, any>) => boolean;
    shallowCompare: (instance: any, nextProps: Record<string, any>, nextState: Record<string, any>) => boolean;
    isObject: typeof isObject;
};
export { hasDiff, shallowCompare, isObject };
export default expData;

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
const hasDiff = (a, b) => {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new TypeError('diff object must be object type!');
    }
    for (let i in a)
        if (!(i in b))
            return true;
    for (let i in b)
        if (a[i] !== b[i])
            return true;
    return false;
};
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
const shallowCompare = (instance, nextProps, nextState) => {
    return hasDiff(instance.props, nextProps) || hasDiff(instance.state, nextState);
};
/* istanbul ignore next */
export default {
    isObject,
    hasDiff,
    shallowCompare
};
//# sourceMappingURL=index.js.map
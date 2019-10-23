/**
 * Object module.
 * @module zaxObject
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/object
 */
import { isObject } from '../types/index';
declare const _default: {
    isObject: typeof isObject;
    hasDiff: (a: Record<string, any>, b: Record<string, any>) => boolean;
    shallowCompare: (instance: any, nextProps: Record<string, any>, nextState: Record<string, any>) => boolean;
};
export default _default;

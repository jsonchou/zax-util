import { isFunction } from '../types/index';
export declare function lazy(parentObj: object, key: string, ticker?: number, expiredTime?: number): Promise<unknown>;
export declare function sleep(time?: number): Promise<unknown>;
declare const _default: {
    isFunction: typeof isFunction;
    lazy: typeof lazy;
    sleep: typeof sleep;
};
export default _default;

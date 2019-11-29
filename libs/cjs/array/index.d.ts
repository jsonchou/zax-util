/**
 * Array module.
 * @module zaxArray
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/array
 * @see partial from https://github.com/jonschlinkert/arr-diff
 */
import { isArray } from '../types/index';
export declare type TypeObject = {
    [key: string]: any;
};
export declare type TypeArray = string[] | number[];
export declare type ObjectArray = TypeObject[];
export declare type MixArray = TypeArray | ObjectArray;
export declare type TypeOrderBy = 'ASC' | 'DESC';
/**
 * sort array.
 *
 * ```js
 * sort([{ id: 2 }, { id: 3 }, { id: 1 }], 'ASC', 'id'))
 * //=> [{id:1},{id:2},{id:3}]
 * ```
 *
 * @param arr {MixArray}
 * @param orderBy {TypeOrderBy}
 * @param key {String}
 * @readonly {MixArray | void}
 */
export declare function sort(arr: MixArray, orderBy?: TypeOrderBy, key?: string): MixArray | void;
/**
 * unique array.
 *
 * ```js
 * unique(['a','c','d','a']);
 * //=> ['a','b','c']
 * ```
 *
 * @param arr {MixArray}
 * @param key
 * @readonly {MixArray | void}
 */
export declare function unique(arr: MixArray, key?: string): MixArray | void;
/**
 * diff the first array of simple.
 *
 * ```js
 * diff(['a', 'b', 'c'], ['a'], ['b'], ['g'])
 * //=> ['c']
 * ```
 *
 * @param arr {TypeArray[]}
 * @returns {TypeArray}
 */
export declare function diff(...arr: TypeArray[]): TypeArray;
/**
 * intersect array.
 *
 * ```js
 * intersect([1,2,3,4,5], [2,4,6,8,10])
 * //=> [2,4] //交集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export declare function intersect<T>(a: Array<T>, b: Array<T>): Array<T>;
/**
 * minus array.
 *
 * ```js
 * minus([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,3,5] //差集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export declare function minus<T>(a: Array<T>, b: Array<T>): Array<T>;
/**
 * complement array.
 *
 * ```js
 * complement([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,3,5,6,8,10] //补集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export declare function complement<T>(a: Array<T>, b: Array<T>): Array<T>;
/**
 * union array.
 *
 * ```js
 * union([1,2,3,4,5], [2,4,6,8,10])
 * //=> [1,2,3,4,5,6,8,10] //交集
 * ```
 *
 * @param a {Array<T>}
 * @param b {Array<T>}
 * @returns {Array<T>}
 */
export declare function union<T>(a: Array<T>, b: Array<T>): Array<T>;
/**
 * union the array of simple with high performane.
 *
 * ```js
 * unionPro(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
 * //=> ['a', 'b', 'c', 'd', 'e', 'f']
 * ```
 *
 * @param arr {TypeArray[]}
 * @returns {TypeArray}
 */
export declare function unionPro(...arr: TypeArray[]): TypeArray;
declare const _default: {
    isArray: typeof isArray;
    sort: typeof sort;
    unique: typeof unique;
    diff: typeof diff;
    intersect: typeof intersect;
    minus: typeof minus;
    complement: typeof complement;
    union: typeof union;
    unionPro: typeof unionPro;
};
export default _default;

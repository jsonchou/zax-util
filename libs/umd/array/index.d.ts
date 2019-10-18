/**
 * Array module.
 * @module zaxArray
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/array
 * @see partial from https://github.com/jonschlinkert/arr-diff
 */
import { isArray } from '../types/index';
declare type TypeObject = {
    [key: string]: any;
};
declare type TypeArray = string[] | number[];
declare type ObjectArray = TypeObject[];
declare type MixArray = TypeArray | ObjectArray;
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
 * union the array of simple.
 *
 * ```js
 * union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']);
 * //=> ['a', 'b', 'c', 'd', 'e', 'f']
 * ```
 *
 * @param arr {TypeArray[]}
 * @returns {TypeArray}
 */
export declare function union(...arr: TypeArray[]): TypeArray;
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
declare const _default: {
    isArray: typeof isArray;
    sort: typeof sort;
    unique: typeof unique;
    union: typeof union;
    diff: typeof diff;
};
export default _default;

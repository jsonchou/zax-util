"use strict";
/**
 * Array module.
 * @module zaxArray
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/array
 * @see partial from https://github.com/jonschlinkert/arr-diff
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../types/index");
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
function sort(arr, orderBy, key) {
    if (orderBy === void 0) { orderBy = 'ASC'; }
    if (!arr.length) {
        console.error('arr is null');
        return;
    }
    var func;
    if (!key) {
        if (orderBy === 'ASC') {
            func = function (a, b) { return (a > b ? 1 : -1); };
        }
        else {
            func = function (a, b) { return (a > b ? -1 : 1); };
        }
    }
    else {
        if (orderBy === 'ASC') {
            func = function (a, b) { return (a[key] > b[key] ? 1 : -1); };
        }
        else {
            func = function (a, b) { return (a[key] > b[key] ? -1 : 1); };
        }
    }
    return arr.sort(func);
}
exports.sort = sort;
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
function unique(arr, key) {
    var e_1, _a;
    if (key === void 0) { key = 'id'; }
    if (!arr.length) {
        console.error('arr is null');
        return;
    }
    var first = arr[0];
    /* istanbul ignore next */
    if (typeof first === 'string') {
        var tmp = new Set(arr);
        return __spread(Array.from(tmp));
    }
    else if (typeof first === 'number') {
        var tmp = new Set(arr);
        return __spread(Array.from(tmp));
    }
    else if (index_1.isObject(first)) {
        var map = new Map();
        var tmp = [];
        try {
            for (var _b = __values(arr), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (!map.has(item[key])) {
                    map.set(item[key], true);
                    tmp.push(item);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return __spread(Array.from(tmp));
    }
}
exports.unique = unique;
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
function union() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var len = arr.length;
    var i = 0;
    var first = arr[0];
    while (++i < len) {
        var arg = arr[i];
        /* istanbul ignore next */
        if (!arg)
            continue;
        /* istanbul ignore next */
        if (!Array.isArray(arg)) {
            arg = [arg];
        }
        for (var j = 0; j < arg.length; j++) {
            var ele = arg[j];
            if (first.includes(ele))
                continue;
            first.push(ele);
        }
    }
    return first;
}
exports.union = union;
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
function diff() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var diffArray = function (one, two) {
        /* istanbul ignore next */
        if (!Array.isArray(two)) {
            return one.slice();
        }
        var tlen = two.length;
        var olen = one.length;
        var idx = -1;
        var arr = [];
        while (++idx < olen) {
            var ele = one[idx];
            var hasEle = false;
            for (var i = 0; i < tlen; i++) {
                var val = two[i];
                if (ele === val) {
                    hasEle = true;
                    break;
                }
            }
            if (hasEle === false) {
                arr.push(ele);
            }
        }
        return arr;
    };
    var len = arr.length;
    var idx = 0;
    var first = arr[0];
    while (++idx < len) {
        first = diffArray(first, arr[idx]);
    }
    return first;
}
exports.diff = diff;
exports.default = {
    /* istanbul ignore next */
    isArray: index_1.isArray,
    sort: sort,
    unique: unique,
    union: union,
    diff: diff
};
//# sourceMappingURL=index.js.map
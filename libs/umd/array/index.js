var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("../types/index");
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
    function unique(arr, key) {
        if (key === void 0) { key = 'id'; }
        if (!arr.length) {
            console.error('arr is null');
            return;
        }
        var first = arr[0];
        var tmp;
        if (typeof first === 'string') {
            tmp = new Set(arr);
        }
        else if (typeof first === 'number') {
            tmp = new Set(arr);
        }
        else if (index_1.isObject(first)) {
            tmp = [];
            var map = new Map();
            for (var _i = 0, _a = arr; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!map.has(item[key])) {
                    map.set(item[key], true);
                    tmp.push({
                        id: item.id,
                        name: item.name
                    });
                }
            }
        }
        return __spreadArrays(tmp);
    }
    exports.unique = unique;
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
            if (!arg)
                continue;
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
    function diff() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var diffArray = function (one, two) {
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
        isArray: index_1.isArray,
        sort: sort,
        unique: unique,
        union: union,
        diff: diff
    };
});
//# sourceMappingURL=index.js.map
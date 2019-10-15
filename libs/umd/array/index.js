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
            if (!key) {
                console.log('you lost a param named key');
                return;
            }
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
        return tmp.slice();
    }
    exports.unique = unique;
    exports.default = {
        isArray: index_1.isArray,
        sort: sort,
        unique: unique
    };
});
//# sourceMappingURL=index.js.map
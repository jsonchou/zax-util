/**
 * Object module.
 * @module zaxObject
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/object
 */
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
    exports.isEmptyObject = exports.isObject = exports.shallowCompare = exports.hasDiff = void 0;
    var index_1 = require("../types/index");
    Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return index_1.isObject; } });
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
    var hasDiff = function (a, b) {
        if (Array.isArray(a) || Array.isArray(b)) {
            throw new TypeError('diff object must be object type!');
        }
        for (var i in a)
            if (!(i in b))
                return true;
        for (var i in b)
            if (a[i] !== b[i])
                return true;
        return false;
    };
    exports.hasDiff = hasDiff;
    /* istanbul ignore next */
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
    var shallowCompare = function (instance, nextProps, nextState) {
        return hasDiff(instance.props, nextProps) || hasDiff(instance.state, nextState);
    };
    exports.shallowCompare = shallowCompare;
    var isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    exports.isEmptyObject = isEmptyObject;
    /* istanbul ignore next */
    var expData = {
        hasDiff: hasDiff,
        shallowCompare: shallowCompare,
        isObject: index_1.isObject,
        isEmptyObject: isEmptyObject
    };
    exports.default = expData;
});
//# sourceMappingURL=index.js.map
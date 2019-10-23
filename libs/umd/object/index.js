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
    var index_1 = require("../types/index");
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
    var shallowCompare = function (instance, nextProps, nextState) {
        return hasDiff(instance.props, nextProps) || hasDiff(instance.state, nextState);
    };
    /* istanbul ignore next */
    exports.default = {
        isObject: index_1.isObject,
        hasDiff: hasDiff,
        shallowCompare: shallowCompare
    };
});
//# sourceMappingURL=index.js.map
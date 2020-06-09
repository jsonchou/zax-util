/**
 * Func module.
 * @module zaxFunc
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/func
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index", "../object/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sleep = exports.wait = void 0;
    var index_1 = require("../types/index");
    var index_2 = require("../object/index");
    /**
     * wait function loaded
     * @param tar { Object } target object
     * @param ticker { Number } ticker of setInterval
     * @param expiredTime { Number } expired time
     * @returns {Promise}
     */
    function wait(tar, ticker, expiredTime) {
        if (ticker === void 0) { ticker = 30; }
        if (expiredTime === void 0) { expiredTime = 3000; }
        return new Promise(function (resolve, reject) {
            var timer;
            /* istanbul ignore next */
            var unitFunc = function () {
                if (tar && index_1.isArray(tar) && tar.length) {
                    timer && clearInterval(timer);
                    resolve(true);
                }
                else if (tar && index_1.isObject(tar) && !index_2.isEmptyObject(tar)) {
                    timer && clearInterval(timer);
                    resolve(true);
                }
                else if (tar !== '' && tar !== null && tar !== undefined) {
                    if (index_1.isString(tar) || index_1.isDate(tar)) {
                        timer && clearInterval(timer);
                        resolve(true);
                    }
                }
            };
            timer = setInterval(function () {
                /* istanbul ignore next */
                unitFunc();
            }, ticker);
            /* istanbul ignore next */
            setTimeout(function () {
                timer && clearInterval(timer);
                resolve(true);
            }, expiredTime);
        });
    }
    exports.wait = wait;
    /**
     * wait some time and excute the next func
     * @param time {Number} sleep time
     */
    function sleep(time) {
        if (time === void 0) { time = 200; }
        return new Promise(function (resolve) {
            /* istanbul ignore next */
            setTimeout(function () {
                resolve(true);
            }, time);
        });
    }
    exports.sleep = sleep;
    exports.default = {
        /* istanbul ignore next */
        isFunction: index_1.isFunction,
        wait: wait,
        sleep: sleep
    };
});
//# sourceMappingURL=index.js.map
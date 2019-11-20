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
        define(["require", "exports", "../types/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require("../types/index");
    /**
     * wait function loaded
     * @param parentObj { Object } target object
     * @param key { String } key of object
     * @param ticker { Number } ticker of setInterval
     * @param expiredTime { Number } expired time
     * @returns {Promise}
     */
    function wait(parentObj, key, ticker, expiredTime) {
        if (ticker === void 0) { ticker = 30; }
        if (expiredTime === void 0) { expiredTime = 3000; }
        return new Promise(function (resolve, reject) {
            /* istanbul ignore next */
            if (!index_1.isObject(parentObj)) {
                console.error('please input a correct object');
                reject(false);
                return;
            }
            /* istanbul ignore next */
            if (!key) {
                console.error('please input a correct key');
                resolve(false);
                return;
            }
            var timer;
            /* istanbul ignore next */
            if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
                timer && clearInterval(timer);
                resolve(true);
            }
            else {
                /* istanbul ignore next */
                timer = setInterval(function () {
                    if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
                        timer && clearInterval(timer);
                        resolve(true);
                    }
                }, ticker);
            }
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
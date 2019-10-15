"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../types/index");
function lazy(parentObj, key, ticker, expiredTime) {
    if (ticker === void 0) { ticker = 30; }
    if (expiredTime === void 0) { expiredTime = 3000; }
    return new Promise(function (resolve) {
        var timer;
        if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
            timer && window.clearInterval(timer);
            resolve(true);
        }
        else {
            timer = window.setInterval(function () {
                if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
                    timer && window.clearInterval(timer);
                    resolve(true);
                }
            }, ticker);
        }
        window.setTimeout(function () {
            timer && window.clearInterval(timer);
            resolve(true);
        }, expiredTime);
    });
}
exports.lazy = lazy;
function sleep(time) {
    if (time === void 0) { time = 200; }
    return new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(true);
        }, time);
    });
}
exports.sleep = sleep;
exports.default = {
    isFunction: index_1.isFunction,
    lazy: lazy,
    sleep: sleep
};
//# sourceMappingURL=index.js.map
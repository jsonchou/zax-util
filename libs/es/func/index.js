import { isFunction } from '../types/index';
export function lazy(parentObj, key, ticker = 30, expiredTime = 3000) {
    return new Promise(resolve => {
        let timer;
        if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
            timer && window.clearInterval(timer);
            resolve(true);
        }
        else {
            timer = window.setInterval(() => {
                if (parentObj && parentObj[key] != 'undefined' && parentObj[key] != null) {
                    timer && window.clearInterval(timer);
                    resolve(true);
                }
            }, ticker);
        }
        window.setTimeout(() => {
            timer && window.clearInterval(timer);
            resolve(true);
        }, expiredTime);
    });
}
export function sleep(time = 200) {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(true);
        }, time);
    });
}
export default {
    isFunction,
    lazy,
    sleep
};
//# sourceMappingURL=index.js.map
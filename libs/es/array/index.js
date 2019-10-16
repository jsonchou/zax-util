import { isArray, isObject } from '../types/index';
export function sort(arr, orderBy = 'ASC', key) {
    if (!arr.length) {
        console.error('arr is null');
        return;
    }
    let func;
    if (!key) {
        if (orderBy === 'ASC') {
            func = (a, b) => (a > b ? 1 : -1);
        }
        else {
            func = (a, b) => (a > b ? -1 : 1);
        }
    }
    else {
        if (orderBy === 'ASC') {
            func = (a, b) => (a[key] > b[key] ? 1 : -1);
        }
        else {
            func = (a, b) => (a[key] > b[key] ? -1 : 1);
        }
    }
    return arr.sort(func);
}
export function unique(arr, key = 'id') {
    if (!arr.length) {
        console.error('arr is null');
        return;
    }
    let first = arr[0];
    let tmp;
    if (typeof first === 'string') {
        tmp = new Set(arr);
    }
    else if (typeof first === 'number') {
        tmp = new Set(arr);
    }
    else if (isObject(first)) {
        tmp = [];
        let map = new Map();
        for (let item of arr) {
            if (!map.has(item[key])) {
                map.set(item[key], true);
                tmp.push({
                    id: item.id,
                    name: item.name
                });
            }
        }
    }
    return [...tmp];
}
export function union(...arr) {
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
export function diff(...arr) {
    let diffArray = (one, two) => {
        if (!Array.isArray(two)) {
            return one.slice();
        }
        let tlen = two.length;
        let olen = one.length;
        let idx = -1;
        let arr = [];
        while (++idx < olen) {
            let ele = one[idx];
            let hasEle = false;
            for (let i = 0; i < tlen; i++) {
                let val = two[i];
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
    let len = arr.length;
    let idx = 0;
    let first = arr[0];
    while (++idx < len) {
        first = diffArray(first, arr[idx]);
    }
    return first;
}
export default {
    isArray,
    sort,
    unique,
    union,
    diff
};
//# sourceMappingURL=index.js.map
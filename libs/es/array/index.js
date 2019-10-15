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
export function unique(arr, key) {
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
        if (!key) {
            console.log('you lost a param named key');
            return;
        }
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
export default {
    isArray,
    sort,
    unique
};
//# sourceMappingURL=index.js.map
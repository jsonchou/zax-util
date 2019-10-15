import _regex from '../regex';
export function matchRegex(v, regexKey) {
    let nv = v.replace(/\ /gi, '');
    if (nv && nv.match(_regex[regexKey])) {
        return true;
    }
    return false;
}
export function isEmail(v) {
    return matchRegex(v, 'email');
}
export function isDate(v) {
    return matchRegex(v, 'date');
}
export function isQQ(v) {
    return matchRegex(v, 'qq');
}
export function isTel(v) {
    return matchRegex(v, 'tel');
}
export function isIdcard(v) {
    return matchRegex(v, 'idcard');
}
export function isMobile(v) {
    return matchRegex(v, 'mobile');
}
export function isPhone(v) {
    return isMobile(v);
}
export default {
    matchRegex,
    isDate,
    isEmail,
    isIdcard,
    isMobile,
    isPhone,
    isQQ,
    isTel
};
//# sourceMappingURL=index.js.map
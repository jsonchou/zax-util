import _regex from '../regex';
export function matchRegex(v, regexKey) {
    let nv = v.replace(/\ /gi, '');
    let rex = _regex[regexKey];
    if (nv && nv.match(rex)) {
        return true;
    }
    return false;
}
export function isEmail(v) {
    return matchRegex(v, 'EMAIL');
}
export function isDate(v) {
    return matchRegex(v, 'DATE');
}
export function isQQ(v) {
    return matchRegex(v, 'QQ');
}
export function isTel(v) {
    return matchRegex(v, 'TEL');
}
export function isIdcard(v) {
    return matchRegex(v, 'IDCARD');
}
export function isMobile(v) {
    return matchRegex(v, 'MOBILE');
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regex_1 = __importDefault(require("../regex"));
function matchRegex(v, regexKey) {
    var nv = v.replace(/\ /gi, '');
    if (nv && nv.match(regex_1.default[regexKey])) {
        return true;
    }
    return false;
}
exports.matchRegex = matchRegex;
function isEmail(v) {
    return matchRegex(v, 'email');
}
exports.isEmail = isEmail;
function isDate(v) {
    return matchRegex(v, 'date');
}
exports.isDate = isDate;
function isQQ(v) {
    return matchRegex(v, 'qq');
}
exports.isQQ = isQQ;
function isTel(v) {
    return matchRegex(v, 'tel');
}
exports.isTel = isTel;
function isIdcard(v) {
    return matchRegex(v, 'idcard');
}
exports.isIdcard = isIdcard;
function isMobile(v) {
    return matchRegex(v, 'mobile');
}
exports.isMobile = isMobile;
function isPhone(v) {
    return isMobile(v);
}
exports.isPhone = isPhone;
exports.default = {
    matchRegex: matchRegex,
    isDate: isDate,
    isEmail: isEmail,
    isIdcard: isIdcard,
    isMobile: isMobile,
    isPhone: isPhone,
    isQQ: isQQ,
    isTel: isTel
};
//# sourceMappingURL=index.js.map
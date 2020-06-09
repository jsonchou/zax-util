"use strict";
/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobileTaiwan = exports.isMobileMacau = exports.isMobileHongKong = exports.isMobileChina = exports.isMobile = exports.isIdcard = exports.isTel = exports.isQQ = exports.isDate = exports.isEmail = exports.matchRegex = void 0;
var regex_1 = __importDefault(require("../regex"));
/**
 * checke string with regex
 *
 * ```js
 * matchRegex("d@d.d", "EMAIL" );
 * //=> true
 * ```
 *
 * @param v {String|Number|Date} target string
 * @param regexKey {String} regex
 */
function matchRegex(v, regexKey) {
    v = String(v);
    var nv = v.replace(/\ /gi, '');
    var rex = regex_1.default[regexKey];
    if (nv && rex.test(nv)) {
        return true;
    }
    return false;
}
exports.matchRegex = matchRegex;
/**
 * isEmail
 *
 * ```js
 * isEmail("d@d.d");
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
function isEmail(v) {
    return matchRegex(v, 'EMAIL');
}
exports.isEmail = isEmail;
/**
 * isDate
 *
 * ```js
 * isDate(new Date());
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
function isDate(v) {
    return matchRegex(v, 'DATE');
}
exports.isDate = isDate;
/**
 * isQQ
 *
 * ```js
 * isQQ(54645464);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
function isQQ(v) {
    return matchRegex(v, 'QQ');
}
exports.isQQ = isQQ;
/**
 * isTel
 *
 * ```js
 * isTel("027-87665432");
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
function isTel(v) {
    return matchRegex(v, 'TEL');
}
exports.isTel = isTel;
/**
 * isIdcard
 *
 * ```js
 * isIdcard(130324200106012652);
 * //=> true
 * ```
 *
 * @param v {String} target string
 */
function isIdcard(v) {
    return matchRegex(v, 'IDCARD');
}
exports.isIdcard = isIdcard;
/**
 * isMobile
 *
 * ```js
 * isMobile(13402938476)
 * //=> true
 *
 * isMobile('13402938476')
 * //=> true
 *
 * isMobile('8613402938476')
 * //=> true
 *
 * isMobile('+8613402938476')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
function isMobile(v) {
    return matchRegex(v, 'MOBILE');
}
exports.isMobile = isMobile;
/**
 * isMobileChina
 *
 * ```js
 * isMobileChina('13402938476')
 * //=> true
 *
 * isMobileChina('8613402938476')
 * //=> true
 *
 * isMobileChina('+8613402938476')
 * //=> true
 *
 * isMobileChina('94856780')
 * //=> true
 *
 * isMobileChina('6643248')
 * //=> true
 *
 * isMobileChina('0922887075')
 * //=> true
 *
 * isMobileChina('+8860922887075')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
function isMobileChina(v) {
    return isMobile(v) || isMobileHongKong(v) || isMobileMacau(v) || isMobileTaiwan(v);
}
exports.isMobileChina = isMobileChina;
/**
 * isMobileHongKong
 *
 * ```js
 * isMobileHongKong(94856780)
 * //=> true
 *
 * isMobileHongKong('94856780')
 * //=> true
 *
 * isMobileHongKong('85294856780')
 * //=> true
 *
 * isMobileHongKong('+85294856780')
 * //=> true
 *
 * isMobileHongKong(64856780)
 * //=> true
 *
 * isMobileHongKong('64856780')
 * //=> true
 *
 * isMobileHongKong('85264856780')
 * //=> true
 *
 * isMobileHongKong('+85264856780')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
function isMobileHongKong(v) {
    return matchRegex(v, 'MOBILE_HONGKONG');
}
exports.isMobileHongKong = isMobileHongKong;
/**
 * isMobileMacau
 *
 * ```js
 * isMobileMacau(6643248)
 * //=> true
 *
 * isMobileMacau('6643248')
 * //=> true
 *
 * isMobileMacau('8536643248')
 * //=> true
 *
 * isMobileMacau('+8536643248')
 * //=> true
 *
 * isMobileMacau(6843248)
 * //=> true
 *
 * isMobileMacau('6843248')
 * //=> true
 *
 * isMobileMacau('8536843248')
 * //=> true
 *
 * isMobileMacau('+8536843248')
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
function isMobileMacau(v) {
    return matchRegex(v, 'MOBILE_MACAU');
}
exports.isMobileMacau = isMobileMacau;
/**
 * isMobileTaiwan
 *
 * ```js
 * isMobileTaiwan(13402938476);
 * //=> true
 * ```
 *
 * @param v {String|Number} target string
 */
function isMobileTaiwan(v) {
    return matchRegex(v, 'MOBILE_TAIWAN');
}
exports.isMobileTaiwan = isMobileTaiwan;
exports.default = {
    matchRegex: matchRegex,
    isDate: isDate,
    isEmail: isEmail,
    isIdcard: isIdcard,
    isMobile: isMobile,
    isMobileChina: isMobileChina,
    isMobileHongKong: isMobileHongKong,
    isMobileMacau: isMobileMacau,
    isMobileTaiwan: isMobileTaiwan,
    isQQ: isQQ,
    isTel: isTel
};
//# sourceMappingURL=index.js.map
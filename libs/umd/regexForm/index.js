/**
 * RegexForm module.
 * @module zaxRegexForm
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/regexForm
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../regex"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var regex_1 = __importDefault(require("../regex"));
    /**
     * checke string with regex
     *
     * ```js
     * matchRegex("d@d.d", "EMAIL" );
     * //=> true
     * ```
     *
     * @param v {String} target string
     * @param regexKey {String} regex
     */
    function matchRegex(v, regexKey) {
        v = String(v);
        var nv = v.replace(/\ /gi, '');
        var rex = regex_1.default[regexKey];
        if (nv && nv.match(rex)) {
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
     * isMobile(13402938476);
     * //=> true
     * ```
     *
     * @param v {String} target string
     */
    function isMobile(v) {
        return matchRegex(v, 'MOBILE');
    }
    exports.isMobile = isMobile;
    /**
     * isPhone
     *
     * ```js
     * isPhone(13456575859);
     * //=> true
     * ```
     *
     * @param v {String} target string
     */
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
});
//# sourceMappingURL=index.js.map
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
    function matchRegex(v, regexKey) {
        var nv = v.replace(/\ /gi, '');
        var rex = regex_1.default[regexKey];
        if (nv && nv.match(rex)) {
            return true;
        }
        return false;
    }
    exports.matchRegex = matchRegex;
    function isEmail(v) {
        return matchRegex(v, 'EMAIL');
    }
    exports.isEmail = isEmail;
    function isDate(v) {
        return matchRegex(v, 'DATE');
    }
    exports.isDate = isDate;
    function isQQ(v) {
        return matchRegex(v, 'QQ');
    }
    exports.isQQ = isQQ;
    function isTel(v) {
        return matchRegex(v, 'TEL');
    }
    exports.isTel = isTel;
    function isIdcard(v) {
        return matchRegex(v, 'IDCARD');
    }
    exports.isIdcard = isIdcard;
    function isMobile(v) {
        return matchRegex(v, 'MOBILE');
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
});
//# sourceMappingURL=index.js.map
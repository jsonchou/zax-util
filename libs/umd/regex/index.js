(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMAIL = '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$';
    exports.DATE = '^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$';
    exports.QQ = '^[1-9]*[1-9][0-9]*$';
    exports.TEL = '^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$';
    exports.IDCARD = '(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)';
    exports.MOBILE = '^1[3456789]\\d{9}$';
    exports.PHONNE = '^1[3456789]\\d{9}$';
    exports.default = {
        EMAIL: exports.EMAIL,
        DATE: exports.DATE,
        QQ: exports.QQ,
        TEL: exports.TEL,
        IDCARD: exports.IDCARD,
        MOBILE: exports.MOBILE,
        PHONNE: exports.PHONNE
    };
});
//# sourceMappingURL=index.js.map
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
    exports.default = {
        email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
        date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
        qq: "^[1-9]*[1-9][0-9]*$",
        tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
        idcard: "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)",
        mobile: "^1[3456789]\\d{9}$",
        phone: "^1[3456789]\\d{9}$",
    };
});
//# sourceMappingURL=index.js.map
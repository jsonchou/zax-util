var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string", "./func", "./array", "./object", "./regex", "./regexForm", "./types", "./cases"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var string_1 = __importDefault(require("./string"));
    var func_1 = __importDefault(require("./func"));
    var array_1 = __importDefault(require("./array"));
    var object_1 = __importDefault(require("./object"));
    var regex_1 = __importDefault(require("./regex"));
    var regexForm_1 = __importDefault(require("./regexForm"));
    var types_1 = __importDefault(require("./types"));
    var cases_1 = __importDefault(require("./cases"));
    exports.default = {
        zaxString: string_1.default,
        zaxFunc: func_1.default,
        zaxArray: array_1.default,
        zaxObject: object_1.default,
        zaxRegex: regex_1.default,
        zaxRegexForm: regexForm_1.default,
        zaxTypes: types_1.default,
        zaxCases: cases_1.default
    };
});
//# sourceMappingURL=index.js.map
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types"], factory);
    }
})(function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require("../types");
    function cleancase(str) {
        var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
        return str.trim().replace(re, '');
    }
    exports.cleancase = cleancase;
    function pascalcase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toUpperCase();
        }
        str = camelcase(str);
        return str[0].toUpperCase() + str.slice(1);
    }
    exports.pascalcase = pascalcase;
    function camelcase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toLowerCase();
        }
        var re = /[-_.\W\s]+(\w|$)/g;
        return cleancase(str).replace(re, function (_, ch) {
            return ch.toUpperCase();
        });
    }
    exports.camelcase = camelcase;
    function dashcase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toLowerCase();
        }
        var re = /[-_.\W\s]+(\w|$)/g;
        return cleancase(str).replace(re, function (_, ch) {
            return '-' + ch;
        });
    }
    exports.dashcase = dashcase;
    function dotcase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toLowerCase();
        }
        var re = /[-_.\W\s]+(\w|$)/g;
        return cleancase(str).replace(re, function (_, ch) {
            return '.' + ch;
        });
    }
    exports.dotcase = dotcase;
    function pathcase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toLowerCase();
        }
        var re = /[_.-\W\s]+(\w|$)/g;
        return cleancase(str).replace(re, function (_, ch) {
            return '/' + ch;
        });
    }
    exports.pathcase = pathcase;
    function sentencecase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toUpperCase();
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    exports.sentencecase = sentencecase;
    function snakecase(str) {
        if (!types_1.isString(str)) {
            return '';
        }
        if (str.length === 1) {
            return str.toLowerCase();
        }
        var re = /[-_.\W\s]+(\w|$)/g;
        return cleancase(str).replace(re, function (_, ch) {
            return '_' + ch;
        });
    }
    exports.snakecase = snakecase;
    exports.default = {
        cleancase: cleancase,
        camelcase: camelcase,
        pascalcase: pascalcase,
        snakecase: snakecase,
        pathcase: pathcase,
        sentencecase: sentencecase,
        dotcase: dotcase,
        dashcase: dashcase
    };
});
//# sourceMappingURL=index.js.map
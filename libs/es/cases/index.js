'use strict';
import { isString } from '../types';
export function cleancase(str) {
    var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
    return str.trim().replace(re, '');
}
export function pascalcase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    str = camelcase(str);
    return str[0].toUpperCase() + str.slice(1);
}
export function camelcase(str) {
    if (!isString(str)) {
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
export function dashcase(str) {
    if (!isString(str)) {
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
export function dotcase(str) {
    if (!isString(str)) {
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
export function pathcase(str) {
    if (!isString(str)) {
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
export function sentencecase(str) {
    if (!isString(str)) {
        return '';
    }
    if (str.length === 1) {
        return str.toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function snakecase(str) {
    if (!isString(str)) {
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
export default {
    cleancase,
    camelcase,
    pascalcase,
    snakecase,
    pathcase,
    sentencecase,
    dotcase,
    dashcase
};
//# sourceMappingURL=index.js.map
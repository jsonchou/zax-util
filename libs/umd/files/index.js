(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Files module.
     * @module zaxFiles
     * @see https://github.com/jsonchou/zax-util/tree/master/docs/files
     */
    var index_1 = require("../types/index");
    function isFile(item) {
        // 不要用 .css .js 判断是否为文件类型
        if (item.startsWith('//') || item.startsWith('https://') || item.startsWith('http://') || item.startsWith('../') || item.startsWith('./')) {
            return true;
        }
        return false;
    }
    /**
     * load scripts
     *
     * ```js
     * let foo = await loadScripts(["//demo.com/a.js",'https://demo.com/b.js']);
     * //=> scripts[]
     * let bar = await loadScripts(`console.log(111)`);
     * //=> scripts[]
     * ```
     *
     * @param src { String | Array<String> } script array
     * @param options { ScriptOptions } script options
     * @returns  { Promise<HTMLScriptElement[]> } Promise value
     */
    function loadScripts(src, options) {
        if (typeof document === 'undefined') {
            return Promise.reject(new Error('env error'));
        }
        var arr = [];
        if (typeof src === 'string') {
            arr = [src];
        }
        else {
            arr = src;
        }
        var opts = options || {};
        var proms = [];
        var len = arr.length;
        arr.forEach(function (item, index) {
            proms.push(new Promise(function (resolve, reject) {
                /* istanbul ignore next */
                var head = document.head || document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = opts.type || 'text/javascript';
                script.charset = opts.charset || 'utf8';
                script.async = opts.async === false ? false : true;
                if (isFile(item)) {
                    script.src = item;
                }
                else {
                    script.text = item;
                }
                if (opts.attrs && index_1.isObject(opts.attrs)) {
                    Object.keys(opts.attrs).map(function (sub) {
                        /* istanbul ignore next */
                        var suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : '';
                        opts.attrs && script.setAttribute && script.setAttribute(sub, opts.attrs[sub] + suffix);
                    });
                }
                /* istanbul ignore next */
                script.addEventListener('load', function () {
                    script.onerror = script.onload = null;
                    resolve(script);
                }, false);
                /* istanbul ignore next */
                script.addEventListener('error', function () {
                    script.onerror = script.onload = null;
                    reject(new Error('Failed to load ' + script.src));
                }, false);
                head.appendChild(script);
            }));
        });
        return Promise.all(proms);
    }
    exports.loadScripts = loadScripts;
    /**
     * load styles
     *
     * ```js
     * let foo = await loadStyles(["//demo.com/a.css",'https://demo.com/b.css']);
     * //=> styles[]
     * let bar = await loadStyles(`.a{margin-right:10px}`);
     * //=> styles[]
     * ```
     *
     * @param src { String | Array<String> } remote css file or css segment array
     * @param options { StyleOptions } style options
     * @returns  { Array<Promise<Partial<HTMLElementMix> | Error>> } Promise value
     */
    function loadStyles(src, options) {
        if (typeof document === 'undefined') {
            return Promise.reject(new Error('env error'));
        }
        var opts = options || {};
        var arr = [];
        if (typeof src === 'string') {
            arr = [src];
        }
        else {
            arr = src;
        }
        var proms = [];
        var len = arr.length;
        arr.forEach(function (item, index) {
            proms.push(new Promise(function (resolve, reject) {
                var tag;
                if (isFile(item)) {
                    tag = document.createElement('link');
                    tag.rel = 'stylesheet';
                    tag.href = item;
                    if (opts.media) {
                        tag.media = opts.media;
                    }
                    tag.charset = opts.charset || 'utf8';
                }
                else {
                    tag = document.createElement('style');
                    tag.innerHTML = item;
                    if (opts.media) {
                        tag.media = opts.media;
                    }
                    tag.type = 'text/css';
                }
                var before = opts.before;
                if (!before) {
                    /* istanbul ignore next */
                    var befores = (document.body || document.getElementsByTagName('head')[0]).childNodes;
                    before = befores[befores.length - 1];
                }
                if (opts.attrs && index_1.isObject(opts.attrs)) {
                    Object.keys(opts.attrs).map(function (sub) {
                        /* istanbul ignore next */
                        var suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : '';
                        opts.attrs && tag.setAttribute && tag.setAttribute(sub, opts.attrs[sub] + suffix);
                    });
                }
                before && before.parentNode && before.parentNode.insertBefore(tag, before.nextSibling);
                resolve(tag);
            }));
        });
        return Promise.all(proms);
    }
    exports.loadStyles = loadStyles;
    exports.default = {
        loadScripts: loadScripts,
        loadStyles: loadStyles
    };
});
//# sourceMappingURL=index.js.map
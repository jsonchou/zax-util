/**
 * Files module.
 * @module zaxFiles
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/files
 * @see https://github.com/eldargab/load-script/blob/master/index.js
 */
import { isObject } from '../types/index';
/**
 * load scripts
 *
 * ```js
 * let foo = loadScripts(["a.js",'b.js']);
 * //=> Promise
 * ```
 *
 * @param src { String | Array<String> } script array
 * @param opts { ScriptOptions } script options
 * @returns  { Promise<Array<HTMLScriptElement | Error>> } Promise value
 */
export function loadScripts(src, opts) {
    function stdOnEnd(script, resolve, reject) {
        script.onload = function () {
            this.onerror = this.onload = null;
            resolve(script);
        };
        script.onerror = function () {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            reject(new Error('Failed to load ' + this.src));
        };
    }
    function ieOnEnd(script, resolve, reject) {
        script.onreadystatechange = function () {
            if (this.readyState != 'complete' && this.readyState != 'loaded')
                return;
            this.onreadystatechange = null;
            resolve(script); // there is no way to catch loading errors in IE8
        };
    }
    if (typeof src === 'string') {
        src = [src];
    }
    opts = opts || {};
    let promos = () => {
        let arr = [];
        let len = src.length || 1;
        src.forEach((item, index) => {
            arr.push(new Promise((resolve, reject) => {
                var head = document.head || document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = opts.type || 'text/javascript';
                script.charset = opts.charset || 'utf8';
                script.async = 'async' in opts ? !!opts.async : true;
                script.src = item;
                if (opts.attrs && isObject(opts.attrs)) {
                    Object.keys(opts.attrs).map(sub => {
                        if (len > 1 && opts.attrs && opts.attrs.id) {
                            opts.attrs.id = opts.attrs.id + '_' + (index + 1);
                        }
                        sub && opts.attrs && script.setAttribute(sub, opts.attrs[sub]);
                    });
                }
                if (opts.text) {
                    script.text = '' + opts.text;
                }
                head.appendChild(script);
                if ('onload' in script) {
                    stdOnEnd(script, resolve, reject);
                }
                else {
                    ieOnEnd(script, resolve, reject);
                }
                // some good legacy browsers (firefox) fail the 'in' detection above
                // so as a fallback we always set onload
                // old IE will ignore this and new IE will set onload
                if (!script.onload) {
                    stdOnEnd(script, resolve, reject);
                }
            }));
        });
        return arr;
    };
    return Promise.all(promos());
}
/**
 * load scripts
 *
 * ```js
 * let foo = loadStyles(["a.css",'b.css']);
 * //=> Promise
 * ```
 *
 * @param src { String | Array<String> } remote css file or css segment array
 * @param opts { StyleOptions } style options
 * @returns  { Promise<Array<HTMLElementMix>> } Promise value
 */
export function loadStyles(src, opts) {
    if (typeof src === 'string') {
        src = [src];
    }
    opts = opts || {};
    let promos = () => {
        let arr = [];
        let len = src.length || 1;
        src.forEach((item, index) => {
            arr.push(new Promise((resolve, reject) => {
                let tag;
                if (opts.inline) {
                    tag = document.createElement('style');
                    tag.innerHTML = item;
                    tag.media = opts.media || '';
                    tag.type = 'text/css';
                }
                else {
                    tag = document.createElement('link');
                    tag.rel = 'stylesheet';
                    tag.href = item;
                    tag.media = opts.media || '';
                    tag.charset = opts.charset || 'utf8';
                }
                let before = opts.before;
                if (!before) {
                    let befores = (document.body || document.getElementsByTagName('head')[0]).childNodes;
                    before = befores[befores.length - 1];
                }
                if (opts.attrs && isObject(opts.attrs)) {
                    Object.keys(opts.attrs).map(sub => {
                        if (len > 1 && opts.attrs && opts.attrs.id) {
                            opts.attrs.id = opts.attrs.id + '_' + (index + 1);
                        }
                        sub && opts.attrs && tag.setAttribute && tag.setAttribute(sub, opts.attrs[sub]);
                    });
                }
                try {
                    before && before.parentNode && before.parentNode.insertBefore(tag, before.nextSibling);
                    resolve(tag);
                }
                catch (err) {
                    reject(new Error(err));
                }
            }));
        });
        return arr;
    };
    return Promise.all(promos());
}
export default {
    loadScripts,
    loadStyles
};
//# sourceMappingURL=index.js.map
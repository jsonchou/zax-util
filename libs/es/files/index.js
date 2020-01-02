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
 * let foo = await loadScripts(["a.js",'b.js']);
 * //=> scripts[]
 * let bar = await loadScripts(`console.log(111)`,{inline:true});
 * //=> scripts[]
 * ```
 *
 * @param src { String | Array<String> } script array
 * @param options { ScriptOptions } script options
 * @returns  { Promise<HTMLScriptElement[]> } Promise value
 */
export function loadScripts(src, options) {
    function stdOnEnd(script, resolve, reject) {
        /* istanbul ignore next */
        script.onload = function () {
            this.onerror = this.onload = null;
            resolve(script);
        };
        /* istanbul ignore next */
        script.onerror = function () {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            reject(new Error('Failed to load ' + this.src));
        };
    }
    /* istanbul ignore next */
    function ieOnEnd(script, resolve, reject) {
        script.onreadystatechange = function () {
            if (this.readyState != 'complete' && this.readyState != 'loaded') {
                return;
            }
            this.onreadystatechange = null;
            resolve(script); // there is no way to catch loading errors in IE8
        };
    }
    let arr = [];
    if (typeof src === 'string') {
        arr = [src];
    }
    else {
        arr = src;
    }
    let opts = options || {};
    let proms = [];
    let len = arr.length;
    arr.forEach((item, index) => {
        proms.push(new Promise((resolve, reject) => {
            /* istanbul ignore next */
            let head = document.head || document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            script.type = opts.type || 'text/javascript';
            script.charset = opts.charset || 'utf8';
            script.async = opts.async === false ? false : true;
            if (opts.inline) {
                script.text = item;
            }
            else {
                script.src = item;
            }
            if (opts.attrs && isObject(opts.attrs)) {
                Object.keys(opts.attrs).map(sub => {
                    /* istanbul ignore next */
                    let suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : '';
                    opts.attrs && script.setAttribute && script.setAttribute(sub, opts.attrs[sub] + suffix);
                });
            }
            /* istanbul ignore next */
            script.addEventListener('load', () => {
                script.onerror = script.onload = null;
                resolve(script);
            }, false);
            /* istanbul ignore next */
            script.addEventListener('error', () => {
                script.onerror = script.onload = null;
                reject(new Error('Failed to load ' + script.src));
            }, false);
            head.appendChild(script);
        }));
    });
    return Promise.all(proms);
}
/**
 * load styles
 *
 * ```js
 * let foo = await loadStyles(["a.css",'b.css']);
 * //=> styles[]
 * let bar = await loadStyles(`.a{margin-right:10px}`,{inline:true});
 * //=> styles[]
 * ```
 *
 * @param src { String | Array<String> } remote css file or css segment array
 * @param options { StyleOptions } style options
 * @returns  { Array<Promise<Partial<HTMLElementMix> | Error>> } Promise value
 */
export function loadStyles(src, options) {
    let opts = options || {};
    let arr = [];
    if (typeof src === 'string') {
        arr = [src];
    }
    else {
        arr = src;
    }
    let proms = [];
    let len = arr.length;
    arr.forEach((item, index) => {
        proms.push(new Promise((resolve, reject) => {
            let tag;
            if (opts.inline) {
                tag = document.createElement('style');
                tag.innerHTML = item;
                if (opts.media) {
                    tag.media = opts.media;
                }
                tag.type = 'text/css';
            }
            else {
                tag = document.createElement('link');
                tag.rel = 'stylesheet';
                tag.href = item;
                if (opts.media) {
                    tag.media = opts.media;
                }
                tag.charset = opts.charset || 'utf8';
            }
            let before = opts.before;
            if (!before) {
                /* istanbul ignore next */
                let befores = (document.body || document.getElementsByTagName('head')[0]).childNodes;
                before = befores[befores.length - 1];
            }
            if (opts.attrs && isObject(opts.attrs)) {
                Object.keys(opts.attrs).map(sub => {
                    /* istanbul ignore next */
                    let suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : '';
                    opts.attrs && tag.setAttribute && tag.setAttribute(sub, opts.attrs[sub] + suffix);
                });
            }
            before && before.parentNode && before.parentNode.insertBefore(tag, before.nextSibling);
            resolve(tag);
        }));
    });
    return Promise.all(proms);
}
export default {
    loadScripts,
    loadStyles
};
//# sourceMappingURL=index.js.map
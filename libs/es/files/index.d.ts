export declare type ScriptOptions = {
    type?: string;
    charset?: string;
    async?: boolean;
    text?: string;
    attrs?: Record<string, string>;
};
export declare type StyleOptions = {
    inline?: boolean;
    media?: string;
    charset?: string;
    before?: HTMLElement | HTMLLinkElement;
    attrs?: Record<string, string>;
};
declare type HTMLElementMix = Pick<HTMLLinkElement & HTMLStyleElement, 'rel' | 'media' | 'innerHTML' | 'type' | 'href' | 'charset' | 'setAttribute'>;
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
export declare function loadScripts(src: string | Array<string>, opts: ScriptOptions): Promise<Array<HTMLScriptElement> | Array<Error>>;
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
export declare function loadStyles(src: string | Array<string>, opts: StyleOptions): Promise<Array<Partial<HTMLElementMix> | Error>>;
declare const _default: {
    loadScripts: typeof loadScripts;
    loadStyles: typeof loadStyles;
};
export default _default;

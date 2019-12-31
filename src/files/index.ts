/**
 * Files module.
 * @module zaxFiles
 * @see https://github.com/jsonchou/zax-util/tree/master/docs/files
 * @see https://github.com/eldargab/load-script/blob/master/index.js
 */
import { isObject } from '../types/index'

type Nothing = {} // jsdoc2md bugs, do not remove this line

export type ScriptOptions = {
	type?: string
	charset?: string
	async?: boolean
	text?: string
	attrs?: Record<string, string>
}

export type StyleOptions = {
	inline?: boolean //is inline css segment default false
	media?: string
	charset?: string
	before?: HTMLElement | HTMLLinkElement
	attrs?: Record<string, string>
}

type HTMLElementMix = Pick<HTMLLinkElement & HTMLStyleElement, 'rel' | 'media' | 'innerHTML' | 'type' | 'href' | 'charset' | 'setAttribute'>

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
export function loadScripts(src: string | Array<string>, opts: ScriptOptions): Promise<Array<HTMLScriptElement> | Array<Error>> {
	function stdOnEnd(script: HTMLScriptElement, resolve: any, reject: any) {
		script.onload = function() {
			this.onerror = this.onload = null
			resolve(script)
		}
		script.onerror = function() {
			// this.onload = null here is necessary
			// because even IE9 works not like others
			this.onerror = this.onload = null
			reject(new Error('Failed to load ' + this.src))
		}
	}

	function ieOnEnd(script: HTMLScriptElement, resolve: any, reject: any) {
		script.onreadystatechange = function() {
			if (this.readyState != 'complete' && this.readyState != 'loaded') return
			this.onreadystatechange = null
			resolve(script) // there is no way to catch loading errors in IE8
		}
	}

	if (typeof src === 'string') {
		src = [src]
	}

	opts = opts || {}

	let promos = () => {
		let arr: Array<Promise<any>> = []
		let len = src.length || 1
		;(src as Array<string>).forEach((item, index) => {
			arr.push(
				new Promise<HTMLScriptElement | Error>((resolve, reject) => {
					var head = document.head || document.getElementsByTagName('head')[0]
					var script = document.createElement('script')

					script.type = opts.type || 'text/javascript'
					script.charset = opts.charset || 'utf8'
					script.async = 'async' in opts ? !!opts.async : true
					script.src = item

					if (opts.attrs && isObject(opts.attrs)) {
						Object.keys(opts.attrs).map(sub => {
							if (len > 1 && opts.attrs && opts.attrs.id) {
								opts.attrs.id = opts.attrs.id + '_' + (index + 1)
							}
							sub && opts.attrs && script.setAttribute(sub, opts.attrs[sub])
						})
					}

					if (opts.text) {
						script.text = '' + opts.text
					}

					head.appendChild(script)

					if ('onload' in script) {
						stdOnEnd(script, resolve, reject)
					} else {
						ieOnEnd(script, resolve, reject)
					}
					// some good legacy browsers (firefox) fail the 'in' detection above
					// so as a fallback we always set onload
					// old IE will ignore this and new IE will set onload
					if (!script.onload) {
						stdOnEnd(script, resolve, reject)
					}
				})
			)
		})
		return arr
	}

	return Promise.all(promos())
}

type Nothing2 = {} // jsdoc2md bugs, do not remove this line

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
export function loadStyles(src: string | Array<string>, opts: StyleOptions): Promise<Array<Partial<HTMLElementMix> | Error>> {
	if (typeof src === 'string') {
		src = [src]
	}

	opts = opts || {}

	let promos = () => {
		let arr: Array<Promise<any>> = []
		let len = src.length || 1
		;(src as Array<string>).forEach((item, index) => {
			arr.push(
				new Promise<Partial<HTMLElementMix> | Error>((resolve, reject) => {
					let tag: Partial<HTMLElementMix>
					if (opts.inline) {
						tag = document.createElement('style') as HTMLStyleElement
						tag.innerHTML = item
						tag.media = opts.media || ''
						tag.type = 'text/css'
					} else {
						tag = document.createElement('link') as HTMLLinkElement
						tag.rel = 'stylesheet'
						tag.href = item
						tag.media = opts.media || ''
						tag.charset = opts.charset || 'utf8'
					}

					let before = opts.before

					if (!before) {
						let befores = (document.body || document.getElementsByTagName('head')[0]).childNodes
						before = befores[befores.length - 1] as HTMLLinkElement
					}

					if (opts.attrs && isObject(opts.attrs)) {
						Object.keys(opts.attrs).map(sub => {
							if (len > 1 && opts.attrs && opts.attrs.id) {
								opts.attrs.id = opts.attrs.id + '_' + (index + 1)
							}
							sub && opts.attrs && tag.setAttribute && tag.setAttribute(sub, opts.attrs[sub])
						})
					}

					try {
						before && before.parentNode && before.parentNode.insertBefore(tag as Node, before.nextSibling)
						resolve(tag)
					} catch (err) {
						reject(new Error(err))
					}
				})
			)
		})
		return arr
	}

	return Promise.all(promos())
}

export default {
	loadScripts,
	loadStyles
}

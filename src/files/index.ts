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
	inline?: boolean
	media?: string //'screen' | 'tty' | 'tv' | 'projection' | 'handheld' | 'print' | 'braille' | 'aural' | 'all'
	attrs?: Record<string, string>
}

export type StyleOptions = {
	inline?: boolean //is inline css segment default false
	media?: string //'screen' | 'tty' | 'tv' | 'projection' | 'handheld' | 'print' | 'braille' | 'aural' | 'all'
	charset?: string
	before?: HTMLElement | null
	attrs?: Record<string, string>
}

type HTMLElementMix = Pick<HTMLLinkElement & HTMLStyleElement, 'rel' | 'media' | 'innerHTML' | 'type' | 'href' | 'charset' | 'setAttribute'>

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
 * @returns  { Promise<(HTMLScriptElement | Error)[]> } Promise value
 */
export function loadScripts(src: string | Array<string>, options?: ScriptOptions): Promise<(HTMLScriptElement | Error)[]> {
	function stdOnEnd(script: HTMLScriptElement, resolve: any, reject: any) {
		/* istanbul ignore next */
		script.onload = function() {
			this.onerror = this.onload = null
			resolve(script)
		}
		/* istanbul ignore next */
		script.onerror = function() {
			// this.onload = null here is necessary
			// because even IE9 works not like others
			this.onerror = this.onload = null
			reject(new Error('Failed to load ' + this.src))
		}
	}

	/* istanbul ignore next */
	function ieOnEnd(script: HTMLScriptElement, resolve: any, reject: any) {
		script.onreadystatechange = function() {
			if (this.readyState != 'complete' && this.readyState != 'loaded') {
				return
			}
			this.onreadystatechange = null
			resolve(script) // there is no way to catch loading errors in IE8
		}
	}

	let arr: Array<string> = []

	if (typeof src === 'string') {
		arr = [src]
	} else {
		arr = src
	}

	let opts = options || {}

	let proms: Array<Promise<HTMLScriptElement | Error>> = []
	let len = arr.length
	arr.forEach((item, index) => {
		proms.push(
			new Promise<HTMLScriptElement | Error>((resolve, reject) => {
				/* istanbul ignore next */
				let head = document.head || document.getElementsByTagName('head')[0]
				let script = document.createElement('script')
				script.type = opts.type || 'text/javascript'
				script.charset = opts.charset || 'utf8'
				script.async = opts.async === false ? false : true

				if (opts.inline) {
					script.text = item
				} else {
					script.src = item
				}

				if (opts.attrs && isObject(opts.attrs)) {
					Object.keys(opts.attrs).map(sub => {
						/* istanbul ignore next */
						let suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : ''
						opts.attrs && script.setAttribute && script.setAttribute(sub, opts.attrs[sub] + suffix)
					})
				}

				/* istanbul ignore next */
				script.addEventListener(
					'load',
					() => {
						script.onerror = script.onload = null
						resolve(script)
					},
					false
				)

				/* istanbul ignore next */
				script.addEventListener(
					'error',
					() => {
						script.onerror = script.onload = null
						reject(new Error('Failed to load ' + script.src))
					},
					false
				)

				head.appendChild(script)
			})
		)
	})

	return Promise.all(proms)
}

type Nothing2 = {} // jsdoc2md bugs, do not remove this line

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
export function loadStyles(src: string | Array<string>, options?: StyleOptions): Promise<(Partial<HTMLElementMix> | Error)[]> {
	let opts = options || {}
	let arr: Array<string> = []

	if (typeof src === 'string') {
		arr = [src]
	} else {
		arr = src
	}

	let proms: Array<Promise<Partial<HTMLElementMix> | Error>> = []
	let len = arr.length

	arr.forEach((item, index) => {
		proms.push(
			new Promise<Partial<HTMLElementMix> | Error>((resolve, reject) => {
				let tag: Partial<HTMLElementMix>
				if (opts.inline) {
					tag = document.createElement('style')
					tag.innerHTML = item
					if (opts.media) {
						tag.media = opts.media
					}
					tag.type = 'text/css'
				} else {
					tag = document.createElement('link')
					tag.rel = 'stylesheet'
					tag.href = item
					if (opts.media) {
						tag.media = opts.media
					}
					tag.charset = opts.charset || 'utf8'
				}

				let before = opts.before

				if (!before) {
					/* istanbul ignore next */
					let befores = (document.body || document.getElementsByTagName('head')[0]).childNodes
					before = befores[befores.length - 1] as HTMLLinkElement
				}

				if (opts.attrs && isObject(opts.attrs)) {
					Object.keys(opts.attrs).map(sub => {
						/* istanbul ignore next */
						let suffix = sub === 'id' && len > 1 ? '_' + (index + 1) : ''
						opts.attrs && tag.setAttribute && tag.setAttribute(sub, opts.attrs[sub] + suffix)
					})
				}

				before && before.parentNode && before.parentNode.insertBefore(tag as Node, before.nextSibling)
				resolve(tag)
			})
		)
	})

	return Promise.all(proms)
}

export default {
	loadScripts,
	loadStyles
}
